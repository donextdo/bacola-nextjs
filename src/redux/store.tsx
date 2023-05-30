import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productReducer from "@/features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";
import orderSlice from "@/components/Checkout/orderSlice";
import userReducer from "../../src/features/User/userSlice";
import recentlyClickedReducer from "@/features/product/recentlyClickedSlice";

// Configure the Redux Persist options
const persistConfig = {
  key: 'root',
  storage,
  // You can whitelist or blacklist specific reducers here
  whitelist: ['user'], // Reducers listed here will be persisted
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, combineReducers({
  product: productReducer,
  cart: cartReducer,
  order: orderSlice,
  user: userReducer,
  recentlyClicked: recentlyClickedReducer,
}));

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  
});

// Create the persisted store
export const persistor: Persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
