import React from "react";
import SellPoint from "./SellPoint";
import "./Sellpoints.css";
import { useState, useEffect } from "react";

const SellPoints = () => {
  const [sellPoints, setSellPoints] = useState([]);
  const spaceId = "f5klpei59l37";
  const accessToken = "qFP0gtMR5kSIym8b9moI0USNmXys6etjPY2_jDNGTjQ";
  const query = `query{
        sellPointCollection{
          items{
            shopName
            adress
            email
            instagram
            location{
              lat
              lon
            }
            web
            phone
            map{
              url
            }
            
          }
        }
        
      }`;
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
        setSellPoints(data.sellPointCollection.items);
      });
  }, [accessToken, spaceId, query]);
  console.log(sellPoints);

  return (
    < div className="sellPointsWrapper">
      <h1 className="sellPointsTitle">PUNTOS DE VENTA</h1>
      <SellPoint info={sellPoints[0]} />
    </div>
  );
};

export default SellPoints;
