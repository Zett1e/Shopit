import React from "react";
import { FiSend } from "react-icons/fi";


const Footer = () => {
  return (
    <div className="mt-10 bg-[#00cc66]  py-10 px-5 md:px-20 text-white ">
      <div className="mx-auto flex justify-between md:justify-center items-center md:gap-20">
        <div className="hidden md:block">
          <img
            className="md:w-36 "
            src={require("../../Assets/Images/shopit-logo_white.png")}
            alt="Logo"
          />
        </div>
        <div className="md:basis-2/5 basis-1/2">
          <p className=" text-sm md:text-lg ">
            Whether you are new to Shopit, we're glad you are here. Drop your
            email to get up to dated news with our products!
          </p>
          <div className="w-11/12 h-10 mx-auto mt-3 md:flex justify-center hidden">
            <input
              className="w-full placeholder:italic text-black outline-none rounded-tl-md rounded-bl-md px-5"
              placeholder="example@example.com"
              type="email"
              name="email"
              id="email"
            />
            <button className="h-full w-14 bg-[#99ffca] rounded-tr-md rounded-br-md">
              <FiSend className="mx-auto " color="#222" size={28} />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className=" text-sm md:text-base text-center font-semibold">Shop On Mobile</p>
          <a href="/"> <img className="w-28 md:w-36" src={require('../../Assets/Images/google-play-badge.png')} alt="" /> </a>
          <a href="/"> <img className="w-24 md:w-32" src={require('../../Assets/Images/app-store-badge.png')} alt="" /> </a>
        </div>
      </div>
      <div className="w-full mx-auto mt-3 flex justify-center md:hidden">
            <input
              className="w-full placeholder:italic text-black outline-none rounded-tl-md rounded-bl-md px-5"
              placeholder="example@example.com"
              type="email"
              name="email"
              id="email"
            />
            <button className="h-full w-14 bg-[#99ffca] rounded-tr-md rounded-br-md">
              <FiSend className="mx-auto " color="#222" size={28} />
            </button>
          </div>
      <p className="text-center mt-5 opacity-80">© Copyright Shopit</p>
    </div>
  );
};

export default Footer;
