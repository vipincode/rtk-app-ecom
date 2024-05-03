import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import HomePage from './pages/home-page';
import ShopPage from './pages/shop-page';
import CartPage from './pages/cart-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/shop',
        element: <ShopPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
]);
