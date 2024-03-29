import { createSlice } from '@reduxjs/toolkit';

// первое состояние
const initialState = {
  productCounter: 0,
  priceCounter: 0,
  cartData: [],
};

export const cartOfProductsSlice = createSlice({
  name: 'cartOfProducts',
  initialState,
  reducers: {
    setProductCounter(state, action) {
      state.productCounter = action.payload;
    },
    setPriceCounter(state, action) {
      state.priceCounter = action.payload;
    },
    setCartData(state, action) {
      state.cartData = action.payload;
    },
  },
});

export const { setProductCounter, setPriceCounter, setCartData } =
  cartOfProductsSlice.actions;

export default cartOfProductsSlice.reducer;
