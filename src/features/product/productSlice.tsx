import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "./product";
import productList from "../product/data.json";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";
import Swal from "sweetalert2";

interface ProductsState {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
};

const PRODUCTS_URL = `${baseUrl}/products/getAll`;

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    try {
      const response = await axios.get(PRODUCTS_URL);
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

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    updateProductQuantity: (
      state,
      action: PayloadAction<{ productId: string; count: number }>
    ) => {
      const product = state.products.find(
        (p) => p._id === action.payload.productId
      );
      if (product) {
        product.count = action.payload.count;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export const { setProducts, updateProductQuantity } = productSlice.actions;

export default productSlice.reducer;
