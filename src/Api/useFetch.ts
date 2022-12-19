
import { fetchProduct, fetchCategoryProduct,fetchSearchedProduct } from "../Redux/Slices/ProductSlice";
import { useAppDispatch } from "../Redux/Store";
import { Api } from "./Api";
import React, { FC } from "react";
import { fetchCategories } from "../Redux/Slices/CategorySlice";



const useFetch = () => {
  const dispatch = useAppDispatch();

  const getAllProduct = (): void => {
    Api.get("/")
      .then((res) => dispatch(fetchProduct(res.data.products)))
      .catch((err) => console.log(err));
  };

  const getAllCategories = (): void => {
    Api.get("/categories")
      .then((res) => dispatch(fetchCategories(res.data)))
      .catch((err) => console.log(err));
  };

  const getACategory = (value: string): void => {
    Api.get(`/category/${value}`)
      .then((res) => dispatch(fetchCategoryProduct(res.data.products)))
      .catch((err) => console.log(err));
  };

  const getSearchProduct = (value: string): void => {
    Api.get(`/search?q=${value}`)
      .then((res) => dispatch(fetchSearchedProduct(res.data.products)))
      .catch((err) => console.log(err));
  };

  return {getAllProduct, getAllCategories,getACategory,getSearchProduct};
};

export default useFetch;
