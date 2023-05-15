import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Hero = () => {
  return (
    <div className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full d-flex  ${styles.noramlFlex}`}>
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay showStatus={false}>
        <div className="h-">
          <img src="https://themes.rslahmed.dev/rafcart/assets/images/banner-1.jpg" className="carousel-img" />
        </div>
        <div>
          <img src="https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg" className="carousel-img" />
        </div>
        <div>
          <img src="https://themes.rslahmed.dev/rafcart/assets/images/banner-3.jpg" className="carousel-img" />
        </div>

      </Carousel>
      <div className={`absolute left-10 ${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}>
          Best Collection for <br /> Your everyday needs
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Discover exceptional value and unbeatable prices at your one-stop
          destination for all your needs.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
