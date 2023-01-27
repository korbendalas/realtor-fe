import { axios } from '@/lib/axios';
import { AuthUser } from '@/features/auth/types';

// import { AuthUser } from '../types';

export const getUser = (): Promise<AuthUser> => {
  return axios.get('auth/signup/BUYER');
};
