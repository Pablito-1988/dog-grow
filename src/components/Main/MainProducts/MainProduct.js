import React from 'react';
import { Link } from 'react-router-dom';

const MainProduct = (props) => {
  return (
    <Link className='linkContainer'
      to={`/producto/${props.nombre}`}
    >
      <div className='mainProductContainer'>
        <img
          className='mainProductMainImg'
          src={props.imagen}
          alt={props.categoria}
        />
        <p className='mainProductInfoName'>{props.nombre}</p>
        <button className='moreInfoButton'>Mas info</button>
      </div>
    </Link>
  );
};

export default MainProduct;
