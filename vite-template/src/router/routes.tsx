import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
const Login = lazy(() => import('@/login'));
const Home = lazy(() => import('@/views/Home'));
const About = lazy(() => import('@/views/About'));

const Routes = [
  {
    path: '/',
    element: <Navigate to={'/home'} />,
  },
  {
    path: '/home',
    element: <Home />,
    // children: [
    //   {
    //     path: 'pa',
    //     element: <About />,
    //   },
    // ],
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/login',
    name: 'Login',
    element: <Login />,
  },
];

export default Routes;
