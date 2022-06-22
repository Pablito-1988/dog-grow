import React from 'react';
import useContentful from '../../useContentuf';
import { useState, useEffect } from 'react';

const Products = () => {
    const [product,setProduct] = useState([]);
    const { getEntries } = useContentful('product');
    useEffect(() => {
        getEntries().then(data => {
            setProduct(data.items);
        }
        )
    },[])
    console.log(product)
    return (
        <div>
            <p>hola</p>
        </div>
    );
};

export default Products;