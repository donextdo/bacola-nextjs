import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './product';
import productList from '../product/data.json';


interface ProductsState {
  products: Product[];
  

}

const initialState: ProductsState = {
  products: productList,
 
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    updateProductQuantity: (state, action: PayloadAction<{ productId: number; quantity: number }>
    ) => {
      const product = state.products.find( (p) => p.id === action.payload.productId);
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
  
  },
});

export const { setProducts, updateProductQuantity, } = productSlice.actions;

export default productSlice.reducer;