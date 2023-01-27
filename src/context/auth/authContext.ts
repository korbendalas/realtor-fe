import React from 'react';
import { AuthContextValue } from '@/features/auth/types';

export const AuthContext = React.createContext<AuthContextValue | null>(null);
