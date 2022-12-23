import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../Interfaces/Interface";

const initialState: {
  cartItem: CartItem[];
  totalPrice: number;
  isShowSuccess: boolean;
  isShowFail: boolean;
} = {
  cartItem: [],
  totalPrice: 0,
  isShowSuccess: false,
  isShowFail: false,
};

const cartItemSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        state.cartItem.push(action.payload);
        state.totalPrice += action.payload.price;
        state.isShowSuccess = true;
      } else {
        state.isShowFail = true;
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
    },
    addPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice += action.payload;
    },
    subtractPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice -= action.payload;
    },
    removeToast: (state, action: PayloadAction<boolean>) => {
      state.isShowSuccess = action.payload;
      state.isShowFail = action.payload
    },
  },
});

export default cartItemSlice.reducer;
export const { addToCart, deleteItem, addPrice, subtractPrice, removeToast } =
  cartItemSlice.actions;
