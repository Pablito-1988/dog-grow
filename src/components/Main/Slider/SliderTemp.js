import React from "react";
import { useEffect, useState } from "react";

const SliderTemp = (props) => {
  const images = props.images;

  const [slideIndex, setSlideIndex] = useState(1);
  const [sliderTime, setSliderTime] = useState(5000);

  const moveDot = (index) => {
    setSlideIndex(index);
    setSliderTime(5000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideIndex === images.length
        ? setSlideIndex(1)
        : setSlideIndex(slideIndex + 1);
    }, sliderTime);
    return () => clearInterval(interval);
  });

  return (
    <>
      <ul>
        {images.map((image, index) => {
          return (
            <li
              key={index}
              className={
                slideIndex === index + 1 ? "slide active-anim" : null
              }
              
            >
              <img
                src={image.sliderImg.url}
                alt="Dog Grow"
                className="logoImg"
                key={index}
              />
            </li>
          );
        })}
      </ul>
      <div className="container-dots">
        {images.map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </>
  );
};

export default SliderTemp;
