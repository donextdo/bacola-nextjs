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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
