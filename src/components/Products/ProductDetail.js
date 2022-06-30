import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const item = useParams();
  const [product, setProduct] = useState(null);
  const spaceId = "f5klpei59l37";
  const accessToken = "qFP0gtMR5kSIym8b9moI0USNmXys6etjPY2_jDNGTjQ";
  const query = `query {
        productCollection(
          where: {productName : "${item.producto}"}
        ){
          items{
            price
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
        setProduct(data.productCollection.items);
      });
  }, [accessToken, spaceId, query]);
  console.log(product);

  return (
    <div className="productDetailContainer">
      {!product ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <div className="imageContainer">
          <div className="pathLinks">
            <p className="pathItem">
              <Link to={"/"}>INICIO</Link> /<Link to={"/catalogo"}>CATEGORIAS</Link> /
              <Link to={`/categoria/${product[0].productCategory}`}>{product[0].productCategory}</Link> / 
              {product[0].productName}
            </p>
          </div>
            <img
              className="productImg"
              src={product[0].productMainImg.url}
              alt={product[0].productCategory}
            />
          </div>
          {/* <span className="divisor"></span> */}
          <div className="productData">
            <p className="productName">{product[0].productName}</p>
            <p className="productName">${product[0].price}</p>
            <span className="divisor"></span>
            <p>Descripción: {product[0].productDescription}</p>
            
          </div>
          <div>
            <button className="orderButton"> <a
              href={`https://wa.me/5491165480864?text=Me%20interesa%20este%20producto:%20${product[0].productName}`}
              target={"_blank"}
              rel="noreferrer"
            >QUIERO ESTE PRODUCTO</a></button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
