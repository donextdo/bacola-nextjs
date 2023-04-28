import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderItem } from './orderItem';
import axios from 'axios';
import baseUrl from '../../../utils/baseUrl';
import orderList from "./data.json"

interface OrderState {
  orders: OrderItem[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: OrderState = {
  orders: orderList,
  status: "idle",
  error: null,
};

const PRODUCTS_URL = `${baseUrl}/products`;

export const insertOrderAsync = createAsyncThunk(
  "order/insertOrderAsync",
  async (newObj: OrderItem) => {
    const response = await axios.post(PRODUCTS_URL, newObj);
    return response.data;
  }
);

export const getOrdersByUserIdAsync = createAsyncThunk(
  "order/getOrdersByUserIdAsync",
  async (id: string) => {
    const response = await axios.get(`${PRODUCTS_URL}?userId=${id}`);
    return response.data;
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<OrderItem>) => {
      console.log('Adding order:', action.payload);
      state.orders.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(insertOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(insertOrderAsync.fulfilled, (state, action) => {
        console.log('Order inserted:', action.payload);
        state.orders.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(insertOrderAsync.rejected, (state, action) => {
        state.error = action.error.message ?? "Failed to insert order";
        state.status = "failed";
      })
      .addCase(getOrdersByUserIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOrdersByUserIdAsync.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.status = "succeeded";
      })
      .addCase(getOrdersByUserIdAsync.rejected, (state, action) => {
        state.error = action.error.message ?? "Failed to get orders";
        state.status = "failed";
      });
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
