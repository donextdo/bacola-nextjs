import { createSlice } from '@reduxjs/toolkit';
interface CounterState {
    count: number;
  }
  const initialState: CounterState = {
    count: 0,
  };
  
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
        if (state.count > 0) {
            state.count -= 1;
          }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer


