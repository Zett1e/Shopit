import React from "react";
import { BsCart2 } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";


const Navbar = () => {
  return (
    <header className="flex justify-between items-center my-2 mx-5 md:mx-14 ">
        <Link to="/">
          <img
            className="md:w-40 w-32"
            src={require("../../Assets/Images/shopit-logo_black.png")}
            alt="Logo"
          />
        </Link>
      <nav className="md:flex items-center gap-10 text-black font-medium hidden ">
        <Link className="hover:text-[#00994c]" to="/">
          HOME
        </Link>
        <Link className="hover:text-[#00994c]" to="shop">
          SHOP
        </Link>
        <Link className="hover:text-[#00994c]" to="/">
          CATEGORY
        </Link>
      </nav>
      <div className="flex items-center gap-5 md:gap-10">
        <BsCart2 size={28} className="cursor-pointer mr-5" />
        <BsPersonCircle size={25} className="cursor-pointer hidden md:block" />
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Navbar;
