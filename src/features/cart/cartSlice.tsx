import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../product/product';


interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex === -1) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        state.items[itemIndex].quantity++;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }
    },
    updateItemQuantity: (state,action: PayloadAction<{ itemId: number; quantity: number }> ) => {
      const item = state.items.find((item) => item.id === action.payload.itemId);
      if (item) {
        item.quantity = action.payload.quantity;
      } 
    },
  },
});

export const { addItem, removeItem, updateItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
