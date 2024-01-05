import React from "react";
import Slider from "./Slider/Slider";
/* import Categories from "../Products/Categories"; */
import MainProducts from "./MainProducts/MainProducts";
import escala from "../../assets/images/escala.PNG";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="sliderWrapper">
        <Slider />
      </div>
      {/* <div className="bannerContainer">
       <p>ENVIOS A TODO EL PAIS</p>
      </div> */}
      <div className="MainProducts">
        <MainProducts />
      </div>
      {/*       <Categories/> */}
      <div className="escalaContiner">
        <img className="escala" src={escala} alt="escala"></img>
      </div>
    </>
  );
};

export default Main;
