import "./footer.css";
import { upperFooterdata } from "../../Data";
import SecondFooter from "./SecondFooter";
const Footer = () => {
  return (
    <div className="bg__color">
      <div className="footer__container">
        <div className="upper__footer">
          {upperFooterdata.map((data) => (
            <p>{data.paragraph}</p>
          ))}
        </div>
        <div className="secondFooter__styles">
          <SecondFooter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
