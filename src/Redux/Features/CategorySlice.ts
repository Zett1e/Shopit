import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type categoryState = { categories: string[],toggle: boolean };

const initialState: categoryState = {
  categories: [],
  toggle: false
};

const categorySlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchCategories: (state, action: PayloadAction<string[]>) => {
    state.categories = action.payload
    },
    setToggle : (state, action: PayloadAction<boolean>) => {
      state.toggle = action.payload
      },
  }, 
});

export default categorySlice.reducer;
export const { fetchCategories,setToggle } = categorySlice.actions;
