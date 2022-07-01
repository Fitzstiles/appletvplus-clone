import { useEffect } from "react";
import "./hero.css";
const Hero = () => {
  // Making the Hero video disappear on scroll
  useEffect(() => {
    let video = document.querySelector("video");
    window.addEventListener("scroll", function () {
      let value = 1 + this.window.scrollY / -400;
      video.style.opacity = value;
    });
  });

  return (
    <div className="hero__section">
      <div className="background__video">
        <video src="./images/herobg.mp4" autoPlay loop muted />
      </div>
      <div className="text__container">
        <div className="first__text">
          <h1>
            All Apple Originals.
            <br /> Only on Apple TV+.
          </h1>
          <div className="streamow">
            <a href="/">Stream now</a>
          </div>
        </div>
        <div className="second__text">
          <p>
            Watch on the{" "}
            <img
              src="https://km.support.apple.com/kb/image.jsp?productid=PL182&size=120x120"
              alt=""
            />{" "}
            app
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
