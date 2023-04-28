import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../product/product";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";

interface CartState {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CartState = {
  items: [],
  status: "idle",
  error: null,
};
const PRODUCTS_URL = `${baseUrl}/orders/place`;

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const response = await axios.post(PRODUCTS_URL);
  return response.data;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex === -1) {
        state.items.push({ ...action.payload, count: 1 });
      } else {
        state.items[itemIndex].count++;
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload
      );
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }
    },
    updateItemQuantity: (
      state,
      action: PayloadAction<{ itemId: string; count: number }>
    ) => {
      const item = state.items.find(
        (item) => item._id === action.payload.itemId
      );
      if (item) {
        item.count = action.payload.count;
      }
    },
    removeAll: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export const { addItem, removeItem, updateItemQuantity, removeAll  } = cartSlice.actions;

export default cartSlice.reducer;
