import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../../utils/baseUrl';
import { User } from './user';

interface UserState {
  user: User;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  user: {},
  status: 'idle',
  error: null,
};

const USER_URL = `${baseUrl}/users`;

export const createUserAsync = createAsyncThunk(
  'user/createUserAsync',
  async (userData: { name: string; email: string }) => {
    const response = await axios.post(USER_URL, userData);
    return response.data;
  }
);

export const getUserAsync = createAsyncThunk(
  'user/getUserAsync',
  async (userId: string) => {
    const response = await axios.get(`${USER_URL}/${userId}`);
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<{ name: string; email: string }>>) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(createUserAsync.rejected, (state, action) => {
        state.error = action.error.message ?? 'Failed to create user';
        state.status = 'failed';
      })
      .addCase(getUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.error = action.error.message ?? 'Failed to get user';
        state.status = 'failed';
      });
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
