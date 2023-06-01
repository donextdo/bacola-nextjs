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



// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'

// import storage from "redux-persist/lib/storage"; // or choose another storage option


// // Import your reducers
// import productReducer from "@/features/product/productSlice";
// import cartReducer from "../features/cart/cartSlice";
// import orderSlice from "@/components/Checkout/orderSlice";
// import userReducer from "../../src/features/User/userSlice";
// import recentlyClickedReducer from "@/features/product/recentlyClickedSlice";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedProductReducer = persistReducer(persistConfig, productReducer);
// const persistedCartReducer = persistReducer(persistConfig, cartReducer);
// const persistedOrderReducer = persistReducer(persistConfig, orderSlice);
// const persistedUserReducer = persistReducer(persistConfig, userReducer);
// const persistedRecentlyClickedReducer = persistReducer(
//   persistConfig,
//   recentlyClickedReducer
// );

// export const store = configureStore({
//   reducer: {
//     product: persistedProductReducer,
//     cart: persistedCartReducer,
//     order: persistedOrderReducer,
//     user: persistedUserReducer,
//     recentlyClicked: persistedRecentlyClickedReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),

// });

// // Create the persisted store
// export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
