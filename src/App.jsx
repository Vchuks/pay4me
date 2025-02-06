import "./App.css";
import "boxicons";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AllRate from "./components/AllRate";
import AllTransaction from "./components/AllTransaction";
import Pay from "./components/Pay";
import Work from "./components/Work";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="bg-white w-full h-full">
      <Navbar />
      <Hero />
      <AllRate/>
      <AllTransaction/>
      <Pay/>
      <Work/>
      <Blog/>
    </div>
  );
}

export default App;
