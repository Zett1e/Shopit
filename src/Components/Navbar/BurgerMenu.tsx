import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./BurgerMenu.scss";

const BurgerMenu = () => {
const [menuToggle,setMenuToggle] = useState(false)

  return (
    <div className="md:hidden">
      <Menu right isOpen={menuToggle} onStateChange={(state)=>setMenuToggle(state.isOpen)}>
        <Link onClick={()=>setMenuToggle(false)} className="mb-7" to="/">
          <BsPersonCircle size={30} className='inline-block mr-3' /> Login
        </Link>
        <Link onClick={()=>setMenuToggle(false)} className="mb-5" to="/">HOME</Link>
        <Link onClick={()=>setMenuToggle(false)} className="mb-5" to="shop">SHOP</Link>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
