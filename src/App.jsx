import { SpeedInsights } from "@vercel/speed-insights/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./Component/About/About";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Cards from "./Component/Cards/Cards";
import Services from "./Component/Services/Services";
import Choose from "./Component/Choose/Choose";
import Case from "./Component/Case Studies/Case";
import Contact from "./Component/Contact Us/Contact";
import Price from "./Component/Pricing Plans/Price";
import Comments from "./Component/Comments/Comments";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="mainContainer">
      <Navbar />
      <Home />
      <About />
      <Cards />
      <Services />
      <Choose />
      <Case />
      <Contact />
      <Price />
      <Comments />
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;
