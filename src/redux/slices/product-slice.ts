import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  email: string;
  price: number;
}

interface ProductState {
  data: Product[];
  fetchStatus: 'idle' | 'loading' | 'success' | 'error';
}

const initialState: ProductState = {
  data: [],
  fetchStatus: 'idle',
};

export const fetchAllProduct = createAsyncThunk('products/fetchAllProduct', async (apiUrl: string) => {
  const response = await fetch(apiUrl);
  return response.json();
});

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProduct.pending, (state) => {
        state.fetchStatus = 'loading';
      })
      .addCase(fetchAllProduct.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.data = action.payload;
        state.fetchStatus = 'success';
      })
      .addCase(fetchAllProduct.rejected, (state) => {
        state.fetchStatus = 'error';
      });
  },
});

// Export reducer
export default productSlice.reducer;
