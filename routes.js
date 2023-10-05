import { lazy } from 'react';

const Login = lazy(() => import('@/pages/login'));
const SignUp = lazy(() => import('@/pages/signUp'));
const Home = lazy(() => import('@/pages/index'));

export const routes = [
  { path: '/', name: 'Home', element: Home },
  { path: '/login', name: 'Login', element: Login },
  { path: '/signUp', name: 'SignUp', element: SignUp },
];
