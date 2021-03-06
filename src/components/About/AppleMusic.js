import "./about.css";
import { Link } from "react-router-dom";
const Applemusic = () => {
  return (
    <div className="bg">
      <div className="applemusic__container">
        <div className="textArea">
          <p>The Apple Music Student Plan comes with Apple TV+ for free.3</p>
          <Link to="/">Try Apple Music free</Link>
        </div>
        <div className="img__container">
          <img src="./images/musicLogo.PNG" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Applemusic;
