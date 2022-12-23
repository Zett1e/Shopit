import { Paper } from "@mui/material";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBtn from "../../Components/Button/ArrowBtn";
import { carouselItem } from "../../Interfaces/Interface";

const Hero: FC<carouselItem> = ({ title, image, category }) => {
  const navigate = useNavigate();
  return (
    <Paper className="mx-5 overflow-hidden" elevation={6}>
      <section className="Hero grid md:grid-cols-2 justify-items-center items-center  bg-white p-5 md:p-10">
        <div>
          <h1 className="md:text-4xl text-3xl font-extrabold">
            New {title} Collection Trends in 2023
          </h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            nihil? Ullam sapiente pariatur itaque modi ex molestiae, quos error
            voluptates ad aliquam, non excepturi, sequi nihil est laudantium
            cumque culpa.
          </p>
          <div
            onClick={() => {
              navigate("shop", { state: { category } });
            }}
          >
            <ArrowBtn />
          </div>
        </div>
        <div className="h-[208px] rounded overflow-hidden md:mt-0 mt-5">
          <img
            className="md:w-60 w-full h-full object-cover"
            src={image}
            alt="Product"
          />
        </div>
      </section>
    </Paper>
  );
};

export default Hero;
