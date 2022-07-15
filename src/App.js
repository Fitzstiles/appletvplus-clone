import { BrowserRouter } from "react-router-dom";
import Applemusic from "./components/About/AppleMusic";
import AppleTv from "./components/About/AppleTv";
import Offer from "./components/About/Offer";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import SecondHeader from "./components/header/SecondHeader";
import ThirdHeader from "./components/header/ThirdHeader";
import { Data } from "./Data";
import Faq from "./components/About/Faq";
import AppleTVappps from "./components/About/AppleTVapps";
import SecondLogos from "./components/About/SecondLogos";
import Hero from "./components/Hero/Hero";
import HeroText from "./components/Hero/HeroText";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init();
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SecondHeader />
        <ThirdHeader />
        <Hero />
        <HeroText />
        <AppleTVappps />
        <SecondLogos />
        <Faq Data={Data} key={Data.id} />
        <Offer />
        <Applemusic />
        <AppleTv />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
