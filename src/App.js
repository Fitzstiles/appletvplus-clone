import { BrowserRouter } from "react-router-dom";
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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
