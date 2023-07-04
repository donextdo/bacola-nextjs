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

// store.subscribe(() => {
//   const { cart } = store.getState();
//   localStorage.setItem('cart', JSON.stringify(cart));
// });

// // Retrieve the cart state from local storage and set it as the initial state
// let cartFromLocalStorage: any;
// if (typeof localStorage !== 'undefined') {
//   cartFromLocalStorage = localStorage.getItem('cart');
// }
// console.log(cartFromLocalStorage)
// // if(cartFromLocalStorage.totalCount===null){
// // console.log("hi")
// // }
// if (cartFromLocalStorage !== undefined) {
//   const parsedCart = JSON.parse(cartFromLocalStorage)  
//   console.log(parsedCart.totalCount)
// }

// if (cartFromLocalStorage !== undefined) {
//   store.dispatch(addItem(cartFromLocalStorage)));
// }

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

// // import storage from "redux-persist/lib/storage"; // or choose another storage option

// // Import your reducers
// import productReducer from "@/features/product/productSlice";
// import cartReducer from "../features/cart/cartSlice";
// import orderSlice from "@/components/Checkout/orderSlice";
// import userReducer from "../../src/features/User/userSlice";
// import recentlyClickedReducer from "@/features/product/recentlyClickedSlice";
// import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// const createNoopStorage = () => {
//   return {
//     getItem(_key:any) {
//       return Promise.resolve(null);
//     },
//     setItem(_key:any, value:any) {
//       return Promise.resolve(value);
//     },
//     removeItem(_key:any) {
//       return Promise.resolve();
//     },
//   };
// };

// const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

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


// export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
