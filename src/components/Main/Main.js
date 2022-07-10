import React from "react";
import Slider from "./Slider/Slider";
import MainProducts from "./MainProducts/MainProducts";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="sliderWrapper">
        <Slider />
      </div>
      <div className="bannerContainer">
        <p>¡ENVIOS A TODO EL PAIS!</p>
      </div>
      <div className="MainProducts">
        <MainProducts />
      </div>
    </>
  );
};

export default Main;
