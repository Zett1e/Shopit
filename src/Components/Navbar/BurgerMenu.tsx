import React from "react";
import { slide as Menu } from "react-burger-menu";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./BurgerMenu.scss";

const BurgerMenu = () => {
  return (
    <div className="md:hidden">
      <Menu right>
        <Link className="mb-7" to="/">
          <BsPersonCircle size={30} className='inline-block mr-3' /> Login
        </Link>
        <Link className="mb-5" to="/">HOME</Link>
        <Link className="mb-5" to="shop">SHOP</Link>
        <Link className="mb-5" to="/">CATEGORY</Link>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
