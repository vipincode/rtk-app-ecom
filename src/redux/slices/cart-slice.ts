import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface cartState {
  cartProductIds: string[];
}

const initialState: cartState = {
  cartProductIds: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      state.cartProductIds = [action.payload, ...state.cartProductIds];
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const indexOfId = state.cartProductIds.indexOf(action.payload);
      state.cartProductIds.splice(indexOfId, 1);
    },
    clearCartItems: (state) => {
      state.cartProductIds = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCartItems } = cartSlice.actions;
export default cartSlice.reducer;
