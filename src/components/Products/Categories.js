import React from 'react';
import Category from './Category';
import "./Products.css"
import { useState,useEffect } from 'react';

const Categories = () => {
    const [page, setPage] = useState(null);
    const spaceId= "f5klpei59l37"
    const accessToken= "qFP0gtMR5kSIym8b9moI0USNmXys6etjPY2_jDNGTjQ"
    const query =`query {
        categoryCollection {
          items {
            categoryName
            categoryImage{
              title
              url
            }
          }
        }
      }
        `
    

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({query}),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        } 
        setPage(data.categoryCollection.items);
        
      });
  }, [ accessToken, spaceId, query]);
    

    return (
        <div className='categoriesContainer'>
            <h1>CATALOGO</h1>
            {page && page.map(category => {
                return (<Category key={category.categoryName} nombre={category.categoryName} imagen={category.categoryImage.url} />)
            }
            )}
        </div>
    );
};

export default Categories;