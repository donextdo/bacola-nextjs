import { createSlice } from "@reduxjs/toolkit";

interface cartbuttonState {
  isAddToCart: boolean;
}
const initialState: cartbuttonState = {
  isAddToCart: false,
};

export const cartbuttonSlice = createSlice({
  name: "cartbutton",
  initialState,
  reducers: {
    addQuantity: (state) => {
      state.isAddToCart = true;
    },
    removeFromCart: (state) => {
      state.isAddToCart = false;
    },
  },
});

export const { addQuantity, removeFromCart } = cartbuttonSlice.actions;

export default cartbuttonSlice.reducer;
