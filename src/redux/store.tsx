import { configureStore } from '@reduxjs/toolkit'
import cartItemsReducer from './cartItems'
import counterReducer from './counter'
import cartbuttonReducer from './AddCartButton'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cartItems : cartItemsReducer,
    cartbutton : cartbuttonReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch