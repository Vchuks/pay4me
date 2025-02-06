import { useState } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="w-full z-10 bg-white flex sticky top-0 justify-between items-center p-2 md:px-10 lg:px-20 xl:px-28 py-4">
        <div className="w-30 md:w-44 lg:w-60">
          <img src={logo} alt="" className="w-full" />
        </div>
        <nav className="hidden lg:flex gap-10 items-center">
          <a href="#" className="text-[#404040]">
            About
          </a>
          <a href="#" className="text-[#404040]">
            Blog
          </a>
          <a href="#" className="text-[#404040]">
            Support
          </a>
          <button className="rounded-[1.9125rem] text-white bg-[#03D44A] font-[sansMedium] py-[0.6em] px-[1.7em]">
            Get Mobile App
          </button>
        </nav>
        <box-icon name="menu-alt-right" onClick={handleNav} class="block lg:hidden "></box-icon>
      </div>
      {nav && (
        <nav className="flex flex-col transition-transform lg:hidden gap-10 pb-4 md:pt-4 md:pb-8 px-3 md:px-11">
          <a href="#" className="text-[#404040]">
            About
          </a>
          <a href="#" className="text-[#404040]">
            Blog
          </a>
          <a href="#" className="text-[#404040]">
            Support
          </a>
          <button className="rounded-[1.9125rem] text-white bg-[#03D44A] font-[sansMedium] w-fit py-[0.6em] px-[1.7em]">
            Get Mobile App
          </button>
        </nav>
      )}
    </>
  );
};

export default Navbar;
