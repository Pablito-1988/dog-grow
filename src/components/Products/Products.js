import React from 'react';
import Product from './Product';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const category = useParams();
  const spaceId = 'f5klpei59l37';
  const accessToken = 'qFP0gtMR5kSIym8b9moI0USNmXys6etjPY2_jDNGTjQ';
  const query = `query {
        productCollection(
          where: {productCategory : "${category.categoria}"}
        ){
          items{
            productName
            productCategory
            productDescription
            productMainImg{
              title
              url
            }
          }
      }
      }
        `;

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setProducts(data.productCollection.items);
      });
  }, [accessToken, spaceId, query]);
  if(products.length === 0){
    return(
      <div className='productsWrapper'>
      <div className='pathLinks'>
        <div className='pathItem'>
          <Link to={'/'}>INICIO</Link>{' '}/{' '}
          <Link to={'/catalogo'}>CATEGORIAS</Link>{' '}
        </div>
      </div>
      <h1 className='categoryName'>{category.categoria}</h1>
      <div className='oneproduct'>
        <p>Por el momento sin productos</p>
      </div>
    </div>
    )
  }
  else{
    return (
    <div className='productsWrapper'>
      {/* <div className='pathLinks'>
        <div className='pathItem'>
          <Link to={'/'}>INICIO</Link>{' '}/{' '}
          <Link to={'/catalogo'}>CATEGORIAS</Link>{' '}
        </div>
      </div> */}
      <h1 className='categoryName'>{category.categoria}</h1>
      <div className={products.length <= 2 ? 'oneproduct': 'allProducts' }>
        {products.map((product) => {
          return (
            <Product
              key={product.productName}
              nombre={product.productName}
              categoria={product.productCategory}
              descripcion={product.productDescription}
              imagen={product.productMainImg.url}
            />
          );
        })}
      </div>
    </div>
  );
  }
  
};

export default Products;
