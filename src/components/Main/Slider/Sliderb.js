import React, { useState, useEffect, useCallback } from 'react';
import './Slider.css';

const Sliderb = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images]);

  useEffect(() => {
    const autoSlideInterval = setInterval(goToNextSlide, interval);

    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [goToNextSlide, interval]);

  return (
    <div className="slider">
      <img src={images[currentIndex].sliderImg.url} alt={`Slide ${currentIndex}`} />
    </div>
  );
};

export default Sliderb;