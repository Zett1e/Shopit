import React from "react";
import {  deleteItem } from "../../Redux/Features/CartItemSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/Store";
import CartItemCard from "./CartItemCard";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItem);
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  const deleteHandler = (id: number): void => {
    dispatch(deleteItem(id));
  };


  return (
    <div className="bg-[#ccffe5] min-h-screen">
      <main className="mx-auto bg-white p-5 w-[95%] md:w-[70%] rounded">
        <h1 className="text-2xl font-bold mb-10">Your Shopping Cart</h1>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItemCard
              key={cartItem.id}
              deleteHandler={deleteHandler}
              cartItem={cartItem}
            />
          ))
        ) : (
          <p className="text-center text-lg font-meidum">
                  No item in your cart yet
          </p>
        )}
        <div className="ml-auto w-max">
          <div className="flex gap-10 mt-10">
            <div>
              <p className="text-xl font-bold">Total</p>
              <p className="text-sm">{cartItems.length} item</p>
            </div>
            <p className="text-lg font-medium"> $ {totalPrice} </p>
          </div>
          <button className="w-full p-1 mt-2 rounded-full bg-[#00cc66] hover:bg-[#00994c] duration-200">
            Checkout
          </button>
        </div>
      </main>
    </div>
  );
};

export default Cart;
