import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Control from "./components/Control";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import YouGo from "./components/YouGo";
import Esim from "./components/Esim";
import Privacy from "./components/Privary";
import Product from "./components/Product";
import Connect from "./components/Connect";
import SecureData from "./components/SecureData";
import CyberSefaty from "./components/CyberSefaty";
import Solution from "./components/Solution";
import Loader from "./components/Loader";
import BackTop from "./components/BackTop";

function App() {
  return (
    <div className="bg-black overflow-hidden">
      <Loader />
      <BackTop />
      <div style={{ zIndex: "999", position: "relative" }}>
        <Header />
      </div>
      <Hero />
      <Control />
      <Privacy />
      <Connect />
      <SecureData />
      <Product />
      <Esim />
      <CyberSefaty />
      <YouGo />
      <Faq />
      <Solution />
      <Footer />
    </div>
  );
}

export default App;
