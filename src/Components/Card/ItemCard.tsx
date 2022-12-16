import { Paper } from "@mui/material";
import React, { FC } from "react";
import { CardProp } from "../../Interfaces/Interface";

const ItemCard: FC<CardProp> = ({ product }) => {
  return (
    <Paper className='w-60 overflow-hidden'> 
    <div className="w-full h-[287px]  ">
      <img
        className="h-[123px] w-full object-cover"
        src={product?.thumbnail}
        alt="Product"
      />
      <div className="bg-white p-3 flex flex-col justify-between h-[164px]">
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
    </Paper>
  );
};

export default ItemCard;
