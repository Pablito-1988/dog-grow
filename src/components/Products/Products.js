import React from "react";
import Product from "./Product";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const category = useParams();
  const spaceId = "f5klpei59l37";
  const accessToken = "qFP0gtMR5kSIym8b9moI0USNmXys6etjPY2_jDNGTjQ";
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
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
  console.log(products);
  return (
    <div className="productsWrapper">
      <h1>{category.categoria}</h1>
      <div className="allProducts">
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
};

export default Products;
