import React from "react";
import slider1 from "../../assets/images/1.jpg";
import slider2 from "../../assets/images/2.jpg";
import slider3 from "../../assets/images/3.jpg";
import slider4 from "../../assets/images/4.jpg";
import { useEffect, useState } from "react";
import "./Slider.css"

const Slider = () => {
  const images = [
    { slider: slider1, id: 1 },
    { slider: slider2, id: 2 },
    { slider: slider3, id: 3 },
    { slider: slider4, id: 4 },
  ];
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
  }, [slideIndex, sliderTime, images.length]);

  return (
    <>
    <div className="sliderContainer">
      <div className="slider">
        <ul>
          {images.map((image, index) => {
            return (
              <li
                key={image.id}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <img
                  src={image.slider}
                  alt="Jenny Panichi"
                  className="logoImg"
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container-dots">
        {Array.from({ length: 4 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  </>
  );
};

export default Slider;
