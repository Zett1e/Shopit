import React, { KeyboardEvent, useEffect, useState } from "react";
import { BsFillGrid3X3GapFill, BsSearch } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import useFetch from "../../Api/useFetch";
import ItemCard from "../../Components/Card/ItemCard";
import { setToggle } from "../../Redux/Features/CategorySlice";
import { useAppDispatch, useAppSelector } from "../../Redux/Store";

const Shop = () => {
  const { products } = useAppSelector((state) => state.product);
  const { categories } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();
  const { getAllProduct, getAllCategories, getACategory, getSearchProduct } =
    useFetch();
  const [isLoading, setIsloading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [title, setTitle] = useState(
    "Get a wide range of products in different categories"
  );
  const { category } = useLocation().state || {};

  const onEnterHandler = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      searchHandler();
    }
  };

  const searchHandler = () => {
    if (searchInput === "") {
      setTitle("Get a wide range of products in different categories");
      getAllProduct();
    } else {
      getSearchProduct(searchInput);
      setTitle(`Search For "${searchInput}"`);
      setSearchInput("");
    }
  };

  const showProduct = () => {
    if (category) {
      getACategory(category);
      setTitle(category.toUpperCase());
    } else {
      getAllProduct();
    }
  };

  useEffect(() => {
    dispatch(setToggle(false));
    showProduct();
    getAllCategories();
    setIsloading(false);
  }, [category]);

  return (
    <div>
      <div className="flex items-center bg-white rounded mx-5 mb-5 md:hidden">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={onEnterHandler}
          className="px-2 py-1 rounded outline-none w-full"
        />
        <BsSearch
          onClick={searchHandler}
          className="mr-2 cursor-pointer"
          size={25}
        />
      </div>
      <div className="flex px-5 md:px-20 gap-14">
        <div className="w-[20%]">
          <div className="w-full ">
            <div className="md:flex items-center bg-white rounded hidden">
              <input
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={onEnterHandler}
                className="px-2 py-1 rounded outline-none"
              />
              <BsSearch
                onClick={searchHandler}
                className="mr-2 cursor-pointer"
                size={25}
              />
            </div>
            <div className="px-2 mt-5">
              <div className="flex items-center mb-3">
                <BsFillGrid3X3GapFill />
                <p
                  onClick={() => {
                    getAllProduct();
                    setTitle(
                      "Get a wide range of products in different categories"
                    );
                  }}
                  className="text-lg font-semibold ml-1 cursor-pointer"
                >
                  Categories
                </p>
              </div>
              {categories?.map((category, index) => (
                <div
                  key={index}
                  className="my-2 font-medium hover:text-[#00994c] cursor-pointer"
                  onClick={() => {
                    getACategory(category);
                    setTitle(category.toUpperCase());
                  }}
                >
                  <p className="first-letter:uppercase"> {category} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grow bg-white py-10">
          <h2 className="text-center text-2xl font-bold mb-10">{title}</h2>
          <div className="md:w-full flex justify-center gap-10 flex-wrap ">
            {isLoading ? (
              <PuffLoader className="mx-auto" size={50} color="#00994c" />
            ) : products.length ? (
              products
                ?.slice(0, 21)
                .map((product, index) => (
                  <ItemCard key={index} product={product} />
                ))
            ) : (
              <p className="mt-20"> No Result Found </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
