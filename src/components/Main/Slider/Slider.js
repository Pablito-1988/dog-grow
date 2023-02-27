import React from "react";
import { useEffect, useState } from "react";
import SliderTemp from "./SliderTemp";
import "./Slider.css";

const Slider = () => {
  const [sliderImage, setsliderImage] = useState([]);
  const spaceId = "f5klpei59l37";
  const accessToken = "qFP0gtMR5kSIym8b9moI0USNmXys6etjPY2_jDNGTjQ";
  const query = `query{
    sliderCollection{
      items{
        sliderImg{
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
        setsliderImage(data.sliderCollection.items);
      });
  }, [accessToken, spaceId, query]);
  

 

  return (
    <>
      <div className="sliderContainer">
        <div className="slider">
          {sliderImage.length > 0 ? (
            <SliderTemp images={sliderImage} />
          ) : (
            <p>Cargando</p>
          )}
        </div>
        
      </div>
    </>
  );
};

export default Slider;
