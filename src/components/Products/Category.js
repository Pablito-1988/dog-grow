import React from "react";
import { Link } from "react-router-dom";

const Category = (props) => {
  return (
    <div className="category">
      <p className="categoryName">{props.nombre}</p>
      <Link to={`/categoria/${props.nombre}`}>
        <img className="categoryImg" src={props.imagen} alt="categoria" />
      </Link>
    </div>
  );
};

export default Category;
