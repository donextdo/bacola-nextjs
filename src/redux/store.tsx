// import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "@/features/product/productSlice";
// import cartReducer from "../features/cart/cartSlice";
// import orderSlice from "@/components/Checkout/orderSlice";
// import userReducer from "../../src/features/User/userSlice";
// import recentlyClickedReducer from "@/features/product/recentlyClickedSlice";
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';
// import { combineReducers } from "@reduxjs/toolkit";

// const persistConfig = {
//   key: "root",
//   version:1,
//   storage
// }

// const reducer = combineReducers({
//     product: productReducer,
//     cart: cartReducer,
//     order: orderSlice,
//     user: userReducer,
//     recentlyClicked: recentlyClickedReducer,
// })

// const persistedReducer = persistReducer(persistConfig, reducer)

// export const store = configureStore({
//   reducer: persistedReducer
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;



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