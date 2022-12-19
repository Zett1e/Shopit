import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import categoryReducer from "./Slices/CategorySlice";
import productReducer from "./Slices/ProductSlice";

export const store = configureStore({
    reducer: {
        product : productReducer,
        category : categoryReducer
    }
})

export const useAppDispatch:()=>typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector 