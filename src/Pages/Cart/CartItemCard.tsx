import { Paper } from "@mui/material";
import React, { FC, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { CartItemProp } from "../../Interfaces/Interface";
import { addPrice, subtractPrice } from "../../Redux/Features/CartItemSlice";
import { useAppDispatch } from "../../Redux/Store";
import "./CartItemCard.scss";

const CartItemCard: FC<CartItemProp> = ({ cartItem, deleteHandler }) => {
  const [counter, setCounter] = useState(1);
  const dispatch = useAppDispatch();

  return (
    <div className="mt-2">
      <Paper elevation={2} className="md:flex justify-between items-center p-5">
        <div className="flex items-center gap-5 md:gap-10 md:w-[50%]">
          <div className="basis-40 md:basis-60 h-[126px] rounded-md overflow-hidden select-none">
            <img
              className="w-full h-full object-cover"
              src={cartItem.thumbnail}
              alt="Product"
            />
          </div>
          <div className="max-w-[40%]">
            <p className="text-lg font-medium break-words">
              {" "}
              {cartItem.title}{" "}
            </p>
            <p>{cartItem.brand}</p>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-end md:justify-between mt-5 md:mt-0 md:w-[40%]">
          <div>
            <button
              disabled={counter <= 1 ? true : false}
              onClick={() => {
                setCounter(counter - 1);
                dispatch(subtractPrice(cartItem.price));
              }}
              className="bg-[#ccc] md:w-8 md:h-8 w-6 h-6 rounded-[50%] select-none"
            >
              -
            </button>
            <span className="font-medium mx-2 select-none"> {counter} </span>
            <button
              onClick={() => {
                setCounter(counter + 1);
                dispatch(addPrice(cartItem.price));
              }}
              className="bg-[#ccc] md:w-8 md:h-8 w-6 h-6 rounded-[50%] select-none"
            >
              +
            </button>
          </div>
          <p className="font-medium select-none">
            {" "}
            $ {cartItem.price * counter}{" "}
          </p>
          <div
            onClick={() => {
              deleteHandler(cartItem.id);
              dispatch(subtractPrice(cartItem.price*counter));
            }}
            className="cursor-pointer"
          >
            <BsFillTrashFill className="text-[#ff6046]" />
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default CartItemCard;
