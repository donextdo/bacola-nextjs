import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";
import orderSlice from "@/components/Checkout/orderSlice";
import userReducer from "../../src/features/User/userSlice";
import recentlyClickedReducer from "@/features/product/recentlyClickedSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    order: orderSlice,
    user: userReducer,
    recentlyClicked: recentlyClickedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

