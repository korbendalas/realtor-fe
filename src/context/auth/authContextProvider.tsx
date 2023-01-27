import { useMutation, useQuery, useQueryClient } from 'react-query';
import React from 'react';
import { storage } from '@/utils/storage';
import {
  getUser,
  LoginCredentialsDTO,
  loginWithEmailAndPassword,
  RegisterCredentialsDTO,
  registerWithEmailAndPassword,
} from '@/features/auth/api';

// import { AuthContext } from './authContext';
import { Box, CircularProgress } from '@mui/material';
import { AuthContext } from '@/context/auth/authContext';

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthProviderProps {
  children: React.ReactNode;
  key?: string;
}
export function AuthProvider({ children, key = 'auth-user' }: AuthProviderProps): JSX.Element {
  const queryClient = useQueryClient();

  async function handleUserResponse(data: any) {
    const { jwt, user } = data;
    storage.setToken(jwt);
    return user;
  }

  // load user from LS - then fetch data if token is present
  async function loadUser() {
    if (storage?.getToken()) {
      const data = await getUser();
      return data;
    }
    return null;
  }
  //
  async function loginFn(data: LoginCredentialsDTO) {
    const response = await loginWithEmailAndPassword(data);
    const user = await handleUserResponse(response);
    return user;
  }

  async function registerFn(data: RegisterCredentialsDTO) {
    const response = await registerWithEmailAndPassword(data);
    const user = await handleUserResponse(response);
    return user;
  }

  const {
    data: user,
    error,
    status,
    isLoading,
    isIdle,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: key,
    queryFn: loadUser,
  });

  const setUser = React.useCallback(
    (data: any) => queryClient.setQueryData(key, data),
    [queryClient]
  );

  const loginMutation = useMutation({
    mutationFn: loginFn,
    onSuccess: (user) => {
      setUser(user);
    },
  });

  const registerMutation = useMutation({
    mutationFn: registerFn,
    onSuccess: (user) => {
      setUser(user);
    },
  });
  async function logoutFn() {
    storage.clearToken();
    // This reloads whole app and resets it to beginer state
    window.location.assign(window.location.origin as unknown as string);
  }

  const logoutMutation = useMutation({
    mutationFn: logoutFn,
    onSuccess: () => {
      queryClient.clear();
    },
  });

  const value = React.useMemo(
    () => ({
      user,
      error,
      refetchUser: refetch,
      login: loginMutation.mutateAsync,
      isLoggingIn: loginMutation.isLoading,
      logout: logoutMutation.mutateAsync,
      isLoggingOut: logoutMutation.isLoading,
      register: registerMutation.mutateAsync,
      isRegistering: registerMutation.isLoading,
    }),
    [
      user,
      error,
      refetch,
      loginMutation.mutateAsync,
      loginMutation.isLoading,
      logoutMutation.mutateAsync,
      logoutMutation.isLoading,
      registerMutation.mutateAsync,
      registerMutation.isLoading,
    ]
  );

  if (isLoading || isIdle) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      </div>
    );
  }

  if (error) {
    return <div style={{ color: 'tomato' }}>{JSON.stringify(error, null, 2)}</div>;
  }

  if (isSuccess) {
    return (
      // @ts-ignore // TODO UPDATE THIS TYPE
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  }

  return <div>Unhandled status: {status}</div>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  return context;
}
