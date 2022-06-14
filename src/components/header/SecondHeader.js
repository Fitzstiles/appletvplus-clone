import { Link } from "react-router-dom";
import "./header.css";
const SecondHeader = () => {
  return (
    <div className="container">
      <div className="upperHeader__container">
        <h3>Apple TV+</h3>
        <Link to="/"> Stream now</Link>
      </div>
      <div className="linethrough"></div>
    </div>
  );
};

export default SecondHeader;
