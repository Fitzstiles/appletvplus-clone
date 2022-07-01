import { useEffect } from "react";
import "./carousel.css";
const Carousel = () => {
  return (
    <div className="genreCarousel__container">
      <video src="./images/herobg.mp4" autoPlay loop muted />
    </div>
  );
};

export default Carousel;
