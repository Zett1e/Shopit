import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../Interfaces/Interface";

type categoryState = { categories: string[] };

const initialState: categoryState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchCategories: (state, action: PayloadAction<string[]>) => {
    state.categories = action.payload
    },
  }, 
});

export default categorySlice.reducer;
export const { fetchCategories } = categorySlice.actions;
