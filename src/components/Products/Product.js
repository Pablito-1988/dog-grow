import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
  console.log(props);
  return (
    <Link className='linkContainerSection' to={`/producto/${props.nombre}`}>
      <div className='productContainer'>
        <img
          className='productMainImg'
          src={props.imagen}
          alt={props.categoria}
        />
        <p className='productName'>{props.nombre}</p>

        <div className='moreInfoButtonContainer'>
          <button className='moreInfoButton'>Mas info</button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
