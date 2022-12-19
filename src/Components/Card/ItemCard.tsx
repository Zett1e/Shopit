import { Paper } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import { CardProp } from "../../Interfaces/Interface";

const ItemCard: FC<CardProp> = ({ product }) => {
  const [cardLoading, setCardloading] = useState(true);

  useEffect(() => {
    setCardloading(true);
    setTimeout(() => {
      setCardloading(false);
    }, 1000);
  }, [product]);

  return (
    <Paper className="w-60 overflow-hidden">
      {cardLoading ? (
        <PuffLoader className="mx-auto" size={50} color="#00994c" />
      ) : (
        <div className="w-full h-max  ">
          <img
            className="h-[123px] w-full object-cover"
            src={product?.thumbnail}
            alt="Product"
          />
          <div className="bg-white p-3 flex flex-col justify-between ">
            <p className="text-lg font-semibold"> {product?.title} </p>
            <p> {product?.description.substring(0, 60) + " ..."} </p>
            <div className="flex justify-between items-center mt-2 ">
              <p className="font-bold"> $ {product?.price} </p>
              <button className="bg-[#ccffe5] px-2 py-1 rounded  hover:bg-[#99ffcc] active:translate-y-[2px] transition-all duration-100">
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
