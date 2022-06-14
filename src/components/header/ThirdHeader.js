import { Link } from "react-router-dom";
import "./header.css";
const ThirdHeader = () => {
  return (
    <div className="lowerHeader__container">
      <h4>
        Friday Night Baseball, now streaming on Apple TV+.
        <Link to="/"> Learn more</Link>
      </h4>
    </div>
  );
};

export default ThirdHeader;
