import React from "react";
import { Link } from "react-router-dom";

const Category = (props) => {
  return (
    <div className="category">
      <h3 className="categoryName">{props.nombre}</h3>
      <Link to={`/categoria/${props.nombre}`}>
        <img className="categoryImg" src={props.imagen} alt="categoria" />
      </Link>
    </div>
  );
};

export default Category;
