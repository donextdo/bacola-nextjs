import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state
interface RecentlyClickedState {
  productIds: string[];
}

const initialState: RecentlyClickedState = {
  productIds: [],
};

// Create the recentlyClickedSlice
const recentlyClickedSlice = createSlice({
  name: "recentlyClicked",
  initialState,
  reducers: {
    addRecentlyClickedProductId(state, action: PayloadAction<string>) {
      // Add the recently clicked product ID to the array
      state.productIds.unshift(action.payload);

      // Limit the array length to 4 (or any desired number)
      state.productIds = state.productIds.slice(0, 4);
    },
  },
});

// Export the actions
export const { addRecentlyClickedProductId } = recentlyClickedSlice.actions;

// Export the reducer
export default recentlyClickedSlice.reducer;
