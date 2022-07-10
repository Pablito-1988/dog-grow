import React from "react";
import { Link } from "react-router-dom";

const MainProduct = (props) => {
   
  return (
    <div className='mainProductContainer'>
            <img className='mainProductMainImg' src={props.imagen} alt={props.categoria} />
            <p className="mainProductInfoPrice">${props.precio}</p>
            <p className="mainProductInfoName">{props.nombre}</p>
            <Link className="moreInfoButtonContainer" to={`/producto/${props.nombre}`} >
            <button className='moreInfoButton'>Mas info</button>
            </Link>
        </div>
  );
};

export default MainProduct;
