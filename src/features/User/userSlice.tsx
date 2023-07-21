import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { User } from "./user";
import Swal from "sweetalert2";

interface UserState {
  user: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  user: null,
  status: "idle",
  error: null,
};

const USER_URL = `${baseUrl}/users`;

export const createUserAsync = createAsyncThunk(
  "user/createUserAsync",
  async (userData: User) => {
    try {
      const response = await axios.post(USER_URL, userData);
      return response.data;
    } catch (error: any) {
      Swal.fire({
        width: 500,
        color: "black",
        background: "white",
        imageUrl:
          "https://cdni.iconscout.com/illustration/premium/thumb/something-went-wrong-2511607-2133695.png",
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "Custom image",
        html: `
          <div style="text-align: center;">
            <p style="font-size: 14px;">${error.response.data.message}</p>
          </div>
        `,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        heightAuto: true,
      });
    }
  }
);

export const getUserAsync = createAsyncThunk(
  "user/getUserAsync",
  async (userId: string) => {
    try {
      const response = await axios.get(`${USER_URL}/${userId}`);
      return response.data;
    } catch (error: any) {
      Swal.fire({
        width: 500,
        color: "black",
        background: "white",
        imageUrl:
          "https://cdni.iconscout.com/illustration/premium/thumb/something-went-wrong-2511607-2133695.png",
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "Custom image",
        html: `
          <div style="text-align: center;">
            <p style="font-size: 14px;">${error.response.data.message}</p>
          </div>
        `,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        heightAuto: true,
      });
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      // state.user = { ...state.user, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "succeeded";
      })
      .addCase(createUserAsync.rejected, (state, action) => {
        state.error = action.error.message ?? "Failed to create user";
        state.status = "failed";
      })
      .addCase(getUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "succeeded";
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.error = action.error.message ?? "Failed to get user";
        state.status = "failed";
      });
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
