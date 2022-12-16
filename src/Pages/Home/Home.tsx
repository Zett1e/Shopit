import React, { FC, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Api } from "../../Api/Api";
import ItemCard from "../../Components/Card/ItemCard";
import { setProduct } from "../../Redux/ProductSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/Store";
import { carouselItems } from "./CarouselItems";
import Hero from "./Hero";

const Home: FC = () => {
  const {products} = useAppSelector(state=> state.product)
  const dispatch = useAppDispatch()

  const api = (): void => {
    Api.get("/")
      .then((res) => dispatch(setProduct(res.data.products)))
      .catch((err) => console.log(err));
  };
  

  useEffect(() => {
    api();
  }, []);

  return (
    <div>
      <Carousel indicators={false} swipe={true} animation='slide' duration={700} navButtonsAlwaysInvisible={true}>
      
        {
          carouselItems.map((item)=> <Hero title={item.title} image={item.image} /> )
        }
      </Carousel>
      <section className="feature mt-20 ">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Feature Products
        </h2>
        <div className="md:w-3/5 mx-auto flex justify-center gap-10 flex-wrap">
            {
                products.slice(0,6).map((product)=> <ItemCard product={product} /> )
            }
          
        </div>
      </section>
    </div>
  );
};

export default Home;
