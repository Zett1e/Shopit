import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../Interfaces/Interface";

type productState = { products: Product[] };

const initialState: productState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProduct: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    fetchCategoryProduct: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    fetchSearchedProduct: (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      },
  },
});

export default productSlice.reducer;
export const { fetchProduct,fetchCategoryProduct,fetchSearchedProduct } = productSlice.actions;
