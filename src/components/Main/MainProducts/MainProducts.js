import React from "react";
import MainProduct from "./MainProduct";
import "./MainProducts.css";
import { useState , useEffect } from "react";

const MainProducts = () => {
    const [products, setProducts] = useState([]);
  const spaceId = "f5klpei59l37";
  const accessToken = "qFP0gtMR5kSIym8b9moI0USNmXys6etjPY2_jDNGTjQ";
  const query = `query {
    productCollection(
      where: {home : true}
    ){
      items{
        productName
        price
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
    <>
      <div className="MainProductsContainer">
        <h2 className="mainProductsTitle">Productos destacados</h2>
        <div className="ProductsWrapper">
        {products.map((product) => {
          return (
            <MainProduct
              key={product.productName}
              nombre={product.productName}
              categoria={product.productCategory}
              descripcion={product.productDescription}
              imagen={product.productMainImg.url}
                precio={product.price}
            />
          );
        })}
          
        </div>
      </div>
    </>
  );
};

export default MainProducts;
