import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter-slice';
import cartReducer from './slices/cart-slice';
import productReducer from './slices/product-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
