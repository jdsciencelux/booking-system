import { useState, useEffect } from "react";
import image1 from "../assets/images/image1.jpg"
import image2 from "../assets/images/image2.jpg"
import image3 from "../assets/images/image3.jpg"
import image4 from "../assets/images/image4.jpg"

const slides = [
  {
    image: image1,
    color: "#b80f0f",
    
  },

  {
    image: image2,
      
    color: "#0c418a",
  },

  {
    image: image3,
      
    color: "#b80f0f",
  },
 {
    image: image4,
      
    color: "#0a3f0f",
  },
 
];

function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="carousel-container"
      style={{
        backgroundColor: slides[currentSlide].color,
      }}
    >
      <div className="blur-bg"></div>

      <img
        src={slides[currentSlide].image}
        alt="carousel"
        className="carousel-image"
      />
    </div>
  );
}

export default ImageCarousel;