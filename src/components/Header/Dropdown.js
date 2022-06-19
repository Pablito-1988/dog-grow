import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = (props) => {

    return (
        <div className='dropDownContent'>
            <Link onClick={props.change} className='navLink' to="/">CATALOGO</Link>
            <Link onClick={props.change} className='navLink' to="/edu">EDU</Link>
            <Link onClick={props.change} className='navLink' to="/sell-points">PUNTOS DE VENTA</Link>
            <Link onClick={props.change} className='navLink' to="/contact">CONTACTO</Link>
            <Link onClick={props.change} className='navLink' to="/about">NOSOTROS</Link>
            <a className='navLink' href="https://www.instagram.com/dog.growshop" target={"_blank"} rel="noreferrer"><i class="fab fa-instagram"></i> INSTAGRAM</a>
        </div>
    );
};

export default Dropdown;