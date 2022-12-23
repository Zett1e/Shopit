import { Badge } from "@mui/material";
import React, { useEffect} from "react";
import { BsCart2 } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useFetch from "../../Api/useFetch";
import { setToggle } from "../../Redux/Features/CategorySlice";
import { useAppDispatch, useAppSelector } from "../../Redux/Store";
import BasicMenu from "../Menu/BasicMenu";
import BurgerMenu from "./BurgerMenu";
import "./Navbar.scss";

const Navbar = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItem);
  const { categories } = useAppSelector((state) => state.category);
  const {toggle} = useAppSelector(state=> state.category)
  const dispatch = useAppDispatch()
  const { getAllCategories } = useFetch();
  const navigate = useNavigate();


  let categoryClassName = toggle
    ? "opacity-1 max-h-screen"
    : "opacity-0 max-h-0";

  let activeClassName =
    "text-[#00994c] border-b-2 border-solid border-[#00994c] hover:text-[#00994c]";

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div>
      <header className="flex justify-between items-center my-2 mx-5 md:mx-14">
        <Link to="/">
          <img
            className="md:w-40 w-32 "
            src={require("../../Assets/Images/shopit-logo_black.png")}
            alt="Logo"
          />
        </Link>
        <nav className="md:flex items-center gap-10 text-black font-medium hidden ">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : "hover:text-[#00994c]"
            }
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : "hover:text-[#00994c]"
            }
            to="shop"
          >
            SHOP
          </NavLink>
          <div
            onClick={() => dispatch(setToggle(!toggle))}
            className="hover:text-[#00994c] cursor-pointer select-none"
          >
            CATEGORY
          </div>
        </nav>
        <div className="flex items-center gap-10 md:gap-5">
          <Link className="mt-2 md:mt-0" to="cart">
            <Badge badgeContent={cartItems.length} color="success">
              <BsCart2 size={28} className="cursor-pointer" />
            </Badge>
          </Link>
          <BasicMenu />

          <BurgerMenu />
        </div>
      </header>
      <div
        className={`${categoryClassName} bg-white  category mb-5 mx-5 rounded overflow-hidden`}
      >
        {categories?.map((category, index) => (
          <div
            key={index}
            className="my-2 font-medium hover:text-[#00994c] cursor-pointer px-10"
            onClick={() => {
              navigate("shop", { state: { category } });
            }}
          >
            <p className="first-letter:uppercase w-max"> {category} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
