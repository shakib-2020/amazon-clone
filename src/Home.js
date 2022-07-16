import React from "react";
import Product from "./Product";
import "./Home.css";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        {/* <img class="home__image"
       src="https://tbcdn.talentbrew.com/company/3413/v3_0/img/amazondelivers-social-share.jpg"
       alt=""/> */}
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt=""
        />

        {/* product id, title, price, rating,image*/}
        <div className="Home__row">
          <Product
            Key="6"
            id="123455"
            title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
            price="582.00"
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US218_.jpg"
          />
          <Product
            Key="5"
            id="156435"
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
            price="109.99"
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg"
          />
        </div>
        <div className="Home__row">
          <Product
            Key="4"
            id="146455"
            title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox (STGX2000400)"
            price="59.89"
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL._AC_US160_.jpg"
          />
          <Product
            Key="3"
            id="1876655"
            title="Lenovo Flex 5 14'2-in-1 Laptop, 14.0'FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10"
            price="56.89"
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41Sj6WWOXtL._AC_US160_.jpg"
          />
          <Product
            Key="2"
            id="7865657"
            title="HP 63 | Ink Cartridge | Black | F6U62AN"
            price="66.89"
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41Q-WavqjiL._AC_US160_.jpg"
          />
        </div>
        <div className="Home__row">
          <Product
            Key="1"
            id="22375"
            title="AOC CQ34G2 Super Curved Frameless Gaming Monitor, UltraWide FHD 2560x1080, 1500R VA Panel, 1ms MPRT, 75Hz, FreeSync, Height Adjustable, 3-Yr Zero Dead Pixels"
            price="309"
            rating={5}
            image="https://m.media-amazon.com/images/I/81Wt3h7-V2L._AC_UY218_.jpg"
          />
        </div>
        {/* product */}
      </div>
    </>
  );
}

export default Home;
