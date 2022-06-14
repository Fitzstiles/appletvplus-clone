import { BrowserRouter } from "react-router-dom";
import Applemusic from "./components/About/AppleMusic";
import Offer from "./components/About/Offer";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import SecondHeader from "./components/header/SecondHeader";
import ThirdHeader from "./components/header/ThirdHeader";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SecondHeader />
        <ThirdHeader />
        <Offer />
        <Applemusic />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
