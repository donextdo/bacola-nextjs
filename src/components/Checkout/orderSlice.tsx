import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderItem } from "./orderItem";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import orderList from "./data.json";
import { OrderObj } from "./ordertest";
import { logOut } from "../../../utils/logout";
import { useRouter } from "next/router";

interface OrderState {
  orders: OrderItem[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  status: "idle",
  error: null,
};

const PRODUCTS_URL = `${baseUrl}/orders/get`;
const PRODUCTS_URL_SET = `${baseUrl}/orders/place`;

export const insertOrderAsync = createAsyncThunk(
  "order/insertOrderAsync",
  async (orderObj: OrderObj) => {
    try {
      const response = await axios.post(PRODUCTS_URL_SET, orderObj);
      return response.data;
    } catch (error: any) {
      return error;
    }
  }
);

export const getOrdersByUserIdAsync = createAsyncThunk(
  "order/getOrdersByUserIdAsync",
  async (id: string) => {
    try {
      const res = await axios.get(`${PRODUCTS_URL}/${id}`);
      return res.data;
    } catch (error: any) {
      return error;
     
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<OrderItem>) => {
      state.orders.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(insertOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(insertOrderAsync.fulfilled, (state, action) => {
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
