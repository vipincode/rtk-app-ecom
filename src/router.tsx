import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import HomePage from './pages/home-page';
import ProductPage from './pages/product-page';
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
        path: '/products',
        element: <ProductPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
]);
