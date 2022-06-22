import React from 'react';
import useContentful from '../../useContentuf';
import Category from './Category';
import "./Products.css"
import { useState,useEffect } from 'react';

const Categories = () => {
    const [categories,setCategories] = useState([]);
    const { getEntries } = useContentful('category');
    useEffect(() => {
        getEntries().then(data => {
            setCategories(data.items);
        }
        )
    },[])
    console.log(categories)
    return (
        <div className='categoriesContainer'>
            <h1>CATALOGO</h1>
            {categories.map(category => {
                return <Category key={category.sys.id} nombre={category.fields.categoryName} imagen={category.fields.categoryImage.fields.file.url} />
            })}
        </div>
    );
};

export default Categories;