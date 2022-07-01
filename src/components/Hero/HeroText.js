import "./hero.css";
const HeroText = () => {
  return (
    <div className="theHero__texts">
      <div className="firsttdiv">
        <h1>New Apple Originals Every month.</h1>
        <h1>
          Stream on the AppleTv app on Apple Devices,Smart TVs,consoles or
          sticks.
        </h1>
        <h1>Share Apple TV+ with your Family</h1>
      </div>
      <div className="AppleOffers">
        <div className="firstOffer">
          <h3>Buy an Apple device</h3>
          <h1>3 months free.</h1>
          <p>
            Apple TV+ is included for 3 months when you purchase an Apple device
            and redeem the offer within 90 days.1
          </p>
          <a
            className="hero__link"
            href="https://tv.apple.com/channel/tvs.sbd.4000?itscg=10000&itsct=atv-0-tv_ovp-prc_elg-apl-avl-200306"
          >
            Cheack eligibility
          </a>
        </div>
        <div className="secondOffer">
          <h3>Free 7-day trial</h3>
          <h1>$4.99/mo.</h1>
          <p>
            A monthly subscription is just $4.99 per month after a free 7-day
            trial. Share Apple TV+ with your family.2
          </p>
          <a
            className="hero__link"
            href="https://tv.apple.com/channel/tvs.sbd.4000?itscg=10000&itsct=atv-0-tv_ovp-prc_tif-apl-avl-200306"
          >
            Try it free
          </a>
        </div>
        <div className="thirdOffer">
          <h3>Free 1‑month trial</h3>
          <h1>Apple One</h1>
          <p>
            Bundle Apple TV+ with up to five other great services for one low
            monthly price. And enjoy more for less.
            <a className="blue__links" href="https://www.apple.com/apple-one/">
              Learn more
            </a>
          </p>
          <a
            className="hero__link"
            href="https://one.apple.com/us/tv?itscg=10000&itsct=one-NA-tvhro-bnr-apl-avl-102020"
          >
            Try Apple One free
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
