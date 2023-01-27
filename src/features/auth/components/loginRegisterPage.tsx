import { RegisterForm } from '@/features/auth/components/registerForm';
import BG_IMAGE from '@/assets/images/register/twitter_landing.png';
import { useState } from 'react';
import { LoginForm } from '@/features/auth/components/loginForm';

export const LoginRegisterPage = () => {
  const [isRegister, setIsRegister] = useState(true);

  const setLogin = () => setIsRegister(false);
  const setRegister = () => setIsRegister(true);
  return <div>hello</div>;
};
