import { Link } from "react-router-dom";
import "./about.css";
const Airplay = () => {
  return (
    <div className="airplay__container">
      <div className="airplay__items">
        <h3>AirPlay</h3>
        <h1>Bring Apple TV+ to a screen near you.</h1>
        <Link to="/">Learn more</Link>
        <div className="airplay__image">
          <img src="./images/AppleAirplayLogo.PNG" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Airplay;
