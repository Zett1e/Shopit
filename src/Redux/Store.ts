import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import categoryReducer from "./Features/CategorySlice";
import productReducer from "./Features/ProductSlice";
import cartReducer from './Features/CartItemSlice'
import popupReducer from "./Features/PopupSlice";

export const store = configureStore({
    reducer: {
        product : productReducer,
        category : categoryReducer,
        cart : cartReducer,
        popup: popupReducer
        
    }
})

export const useAppDispatch:()=>typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector 