import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = (props) => {

    return (
        <div className='dropDownContent'>
            <Link onClick={props.change} className='navLink' to="/">Catalogo</Link>
            <Link onClick={props.change} className='navLink' to="/edu">Edu</Link>
            <Link onClick={props.change} className='navLink' to="/sell-points">Puntos de Venta</Link>
            <Link onClick={props.change} className='navLink' to="/contact">Contacto</Link>
            <Link onClick={props.change} className='navLink' to="/about">About</Link>
            <a className='navLink' href="https://www.instagram.com/dog.growshop" target={"_blank"}><i class="fab fa-instagram"></i> Instagram</a>
        </div>
    );
};

export default Dropdown;