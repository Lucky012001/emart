import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Ensure the CSS file is correctly imported
import firstSlide from '../assets/first-slide.jpg';
import secondSlide from '../assets/second-slide.jpg';
import thirdSlide from '../assets/third-slide.jpg';

const Carousel = () => {
  const images = [firstSlide, secondSlide, thirdSlide];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto slide functionality (every 3 seconds)
  useEffect(() => {
    const interval = setInterval(goToNext, 3000); // Change the slide every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className="carousel-container">
      {/* Carousel Image */}
      <div className="carousel-slide">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>

      {/* Carousel Navigation */}
      <div className="carousel-controls">
        <button className="carousel-control prev" onClick={goToPrevious}>
          &#10094; {/* Left arrow */}
        </button>
        <button className="carousel-control next" onClick={goToNext}>
          &#10095; {/* Right arrow */}
        </button>
      </div>

      {/* Optional: Dots for each slide */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
