import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
  console.log(props);
  return (
    <div className='productContainer'>
      <img
        className='productMainImg'
        src={props.imagen}
        alt={props.categoria}
      />
      <p className='productName'>{props.nombre}</p>
      <Link to={`/producto/${props.nombre}`}>
        <div className='moreInfoButtonContainer'>
          <button className='moreInfoButton'>Mas info</button>
        </div>
      </Link>
    </div>
  );
};

export default Product;
