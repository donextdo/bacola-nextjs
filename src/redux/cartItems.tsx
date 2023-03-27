import { createSlice } from '@reduxjs/toolkit';

interface cartState {
  cartItems: string[];
}
const initialState: cartState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item !== action.payload);
    },
    clearCart: state => {
      state.cartItems = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
