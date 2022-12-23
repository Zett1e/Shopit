import { Paper } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import { CardProp } from "../../Interfaces/Interface";
import { addPrice, addToCart, removeToast } from "../../Redux/Features/CartItemSlice";
import { setIsShow } from "../../Redux/Features/PopupSlice";
import { useAppDispatch } from "../../Redux/Store";

const ItemCard: FC<CardProp> = ({ product }) => {
  const [cardLoading, setCardloading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setCardloading(true);
    setTimeout(() => {
      setCardloading(false);
    }, 1000);
  }, [product]);

  return (
    <Paper className="w-52 md:w-60 overflow-hidden">
      {cardLoading ? (
        <PuffLoader className="mx-auto" size={50} color="#00994c" />
      ) : (
        <div className="w-full h-full flex flex-col ">
          <img
            className="h-[123px] w-full object-cover"
            src={product?.thumbnail}
            alt="Product"
          />
          <div className="bg-white p-3 flex flex-col grow justify-between">
            <p className="text-lg font-semibold"> {product?.title} </p>
            <p> {product?.description.substring(0, 60) + " ..."} </p>
            <div className="h-fit flex justify-between items-center mt-2 ">
              <p className="font-bold"> $ {product?.price} </p>
              <button
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      brand: product.brand,
                      thumbnail: product.thumbnail,
                    })
                  );
                    setTimeout(() => {
                      dispatch(removeToast(false))
                    }, 2000);
                }}
                className="bg-[#99ffcc] px-2 py-1 rounded font-medium hover:bg-[#00cc66] active:translate-y-[2px] transition-all duration-100"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </Paper>
  );
};

export default ItemCard;
