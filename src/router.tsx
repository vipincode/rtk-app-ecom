import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import HomePage from './pages/home-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);
