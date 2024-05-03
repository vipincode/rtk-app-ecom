import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter-slice';
import cartReducer from './slices/cart-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
