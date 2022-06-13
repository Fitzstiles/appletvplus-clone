import "./footer.css";
import SecondFoorter from "./SecondFooter";
const Footer = () => {
  return (
    <div className="bg__color">
      <div className="footer__container">
        <div className="upper__footer">
          <p>
            * The Apple One free trial includes only services that you are not
            currently using through a free trial or a subscription. Plan
            automatically renews after trial until cancelled. Restrictions and
            other terms apply.
          </p>
          <p>
            1. $4.99/month after free trial. Only one offer per Apple ID and
            only one offer per family if you’re part of a Family Sharing group,
            regardless of the number of devices you or your family purchases.
            This offer is not available if you or your Family have previously
            accepted an Apple TV+ one year free offer. Offer good for 3 months
            after eligible device activation. Plan automatically renews until
            cancelled. Restrictions and other terms apply.
          </p>
          <p>
            2.One subscription per Family Sharing group. Plan automatically
            renews until cancelled.
          </p>
          <p>
            3.Limited-time offer; offer may end at any time. Free Apple TV+
            access for students ends when you no longer qualify or do not renew
            your Apple Music Student subscription. Offer good for verified
            college students only and does not extend to a Family Sharing group.
          </p>
          <p>
            Major League Baseball trademarks and copyrights are used with
            permission of MLB Advanced Media, L.P. All rights reserved.
          </p>
        </div>
        <SecondFoorter />
      </div>
    </div>
  );
};

export default Footer;
