// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Product } from "../product/product";
// import baseUrl from "../../../utils/baseUrl";
// import axios from "axios";

// interface CartState {
//   items: Product[];
//   totalCount: number;
//   totalAmount: number;
//   status: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;
// }

// const initialState: CartState = {
//   items: [],
//   totalCount: 0,
//   totalAmount: 0,
//   status: "idle",
//   error: null,
// };
// const PRODUCTS_URL = `${baseUrl}/orders/place`;

// export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
//   const response = await axios.post(PRODUCTS_URL);
//   return response.data;
// });

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItem: (state, action: PayloadAction<Product>) => {
//       console.log(action.payload)
//       const itemIndex = state.items.findIndex(
//         (item) => item._id === action.payload._id
//       );
//       if (itemIndex === -1) {
//         state.items.push({ ...action.payload, count: 1 });
//       } else {
//         state.items[itemIndex].count++;
//       }
//       state.totalCount++;

//     },
//     addItems: ( state,
//       action: PayloadAction<{ product: Product; count: number }>
//     ) => {
//       const { product, count } = action.payload;
//       const itemIndex = state.items.findIndex((item) => item._id === product._id);
    
//       if (itemIndex === -1) {
//         state.items.push({ ...product, count });
//       } else {
//         state.items[itemIndex].count += count;
//       }
    
      
//       state.totalCount += count

//     },
//     removeItem: (state, action: PayloadAction<string>) => {
//       const itemIndex = state.items.findIndex(
//         (item) => item._id === action.payload
//       );
//       if (itemIndex !== -1) {
//         const count = state.items[itemIndex].count;
//         state.items.splice(itemIndex, 1);
//         state.totalCount -= count;
//       }
//     },
//     updateItemQuantity: (
//       state,
//       action: PayloadAction<{ itemId: string; count: number }>
//     ) => {
//       const item = state.items.find(
//         (item) => item._id === action.payload.itemId
//       );
//       if (item) {
//         const countDiff = action.payload.count - item.count;
//         item.count = action.payload.count;
//         state.totalCount += countDiff;
//       }
//     },
//     removeAll: (state) => {
//       state.items = [];
//       state.totalCount = 0;
//       state.totalAmount = 0;
//     },
//     calSubTotal: (state, action) => {
//       // console.log('Order inserted:', action.payload);
//       state.totalAmount += action.payload 
      
//     },
    
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCart.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchCart.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.items = action.payload;
//       })
//       .addCase(fetchCart.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message ?? "Unknown error";
//       });
//   },
// });

// export const {
//   addItem,
//   removeItem,
//   updateItemQuantity,
//   removeAll,
//   calSubTotal,
//   addItems
// } = cartSlice.actions;

// export default cartSlice.reducer;


import {createSlice} from "@reduxjs/toolkit";
import {Product} from "../product/product";

interface CartState {
    totalCount: number;
    totalAmount: number;
    cartItems: Product [];
    error: string | null;
}

const initialState: CartState = {
    totalCount: 0,
    totalAmount: 0,
    cartItems: [],
    error: null,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        calSubTotal: (state, action) => {
            state.totalAmount += action.payload
        },

        addProduct: (state, action) => {
            const product = action.payload
            state.totalCount += product.count

            if (!product.discount) {
                state.totalAmount += product.unit_price;
            } else {
                state.totalAmount += (product.unit_price - (product.unit_price * (product.discount / 100)));
            }

            let newCart
            const existingProduct = state.cartItems.findIndex((item) => item._id === product._id)
            if (existingProduct > -1) {
                newCart = state.cartItems.map((item) => {
                    if (item._id === product._id) {
                        item.count += product.count
                    }
                    return item
                })
            } else {
                newCart = [...state.cartItems, product]
            }

            state.cartItems = newCart
            localStorage.setItem("cartItems", JSON.stringify(newCart))
        },

        removeProduct: (state, action) => {
            const product = action.payload
            state.totalCount -= product.count

            if (!product.discount) {
                state.totalAmount -= product.count * product.unit_price;
            } else {
                state.totalAmount -= product.count * (product.unit_price - (product.unit_price * (product.discount / 100)));
            }

            let newCart
            const existingProduct = state.cartItems.findIndex((item) => item._id === product._id)
            if (existingProduct > -1) {
                newCart = state.cartItems.map((item) => {
                    if (item._id === product._id) {
                        item.count -= product.count
                    }
                    return item
                }).filter((item) => item.count > 0)

            } else {
                newCart = [...state.cartItems, product]
            }

            state.cartItems = newCart
            localStorage.setItem("cartItems", JSON.stringify(newCart))
        },

        resetProduct: (state, action) => {
            state.totalAmount = 0
            state.totalCount = 0
            state.cartItems = []
            localStorage.removeItem("cartItems")
        },

        setCart: (state, action) => {
            state.totalAmount = action.payload.totalAmount
            state.totalCount = action.payload.totalCount
            state.cartItems = action.payload.cartItems
        },

    },

});

export const {
    calSubTotal,
    addProduct,
    removeProduct,
    setCart,
    resetProduct
} = cartSlice.actions;

export default cartSlice.reducer;


