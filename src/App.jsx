import "./App.css";
import "boxicons";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AllRate from "./components/AllRate";
import AllTransaction from "./components/AllTransaction";
import Pay from "./components/Pay";
import Work from "./components/Work";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import Users from "./components/Users";
import Partners from "./components/Partners";
import QR from "./components/QR";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white w-full h-full">
      <Navbar />
      <Hero />
      <AllRate />
      <AllTransaction />
      <Pay />
      <Work />
      <Blog />
      <FAQ />
      <Users />
      <Partners />
      <div className="relative w-full">
        <div className="absolute w-full -top-60">
          <QR />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
