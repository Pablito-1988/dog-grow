import React from "react";
import { Link } from "react-router-dom";

const MainProduct = (props) => {
   
  return (
    <div className='mainProductContainer'>
            <img className='mainProductMainImg' src={props.imagen} alt={props.categoria} />
            <p>{props.nombre}</p>
            <Link to={`/producto/${props.nombre}`} >
            <button className='moreInfoButton'>Mas info</button>
            </Link>
        </div>
  );
};

export default MainProduct;
