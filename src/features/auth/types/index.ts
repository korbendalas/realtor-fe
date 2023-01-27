import {
  QueryObserverResult,
  RefetchOptions,
  UseMutateAsyncFunction,
} from "react-query";
import {
  LoginCredentialsDTO,
  RegisterCredentialsDTO,
} from "@/features/auth/api";

export type AuthUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
  role: "ADMIN" | "USER";
};

export type UserResponse = {
  jwt: string;
  user: AuthUser;
};

export interface AuthContextValue {
  user: AuthUser | undefined;
  login: UseMutateAsyncFunction<AuthUser, any, LoginCredentialsDTO>;
  logout: UseMutateAsyncFunction<any, any, void, any>;
  register: UseMutateAsyncFunction<AuthUser, any, RegisterCredentialsDTO>;
  isLoggingIn: boolean;
  isLoggingOut: boolean;
  isRegistering: boolean;
  refetchUser: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<AuthUser, Error>>;
  error: Error | null;
}
