import React, { FC, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import useFetch from "../../Api/useFetch";
import ItemCard from "../../Components/Card/ItemCard";
import { useAppSelector } from "../../Redux/Store";
import { carouselItems } from "./CarouselItems";
import Hero from "./Hero";

const Home: FC = () => {
  const { products } = useAppSelector((state) => state.product);
  const {getAllProduct} = useFetch();


  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div>
      <Carousel
        indicators={false}
        swipe={true}
        animation="slide"
        duration={700}
        navButtonsAlwaysInvisible={true}
      >
        {carouselItems.map((item, index) => (
          <Hero key={index} title={item.title} image={item.image} />
        ))}
      </Carousel>
      <section className="feature mt-20 ">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Feature Products
        </h2>
        <div className="md:w-3/5 mx-auto flex justify-center gap-10 flex-wrap">
          {products.slice(0, 6).map((product, index) => (
            <ItemCard key={index} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
