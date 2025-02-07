import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#EBFFF2] font-[sansLight] p-3 pt-36 md:pt-60 lg:pt-72 pb-10 md:px-10 lg:px-20 xl:px-28">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 xl:gap-0">
        <div className="w-full">
          <img src={logo} alt="" className="w-56" />
        </div>
        <div className="w-full lg:w-[90%] xl:w-[70%] ml-auto">
          <p>Company</p>
          <div className="flex flex-col gap-3 pt-5 text-sm text-[#000000BF]">
            <a href="#" className="">
              Home
            </a>
            <a href="#" className="">
              About Us
            </a>
            <a href="#" className="">
              Blog
            </a>
            <a href="#" className="">
              Careers
            </a>
          </div>
        </div>
        <div className="w-full xl:w-[70%] ml-auto">
          <p>Support</p>
          <div className="flex flex-col gap-3 pt-5 text-sm text-[#000000BF]">
            <a href="#">FAQ&apos;s</a>
            <a href="#">Live Support</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="w-full xl:w-[70%] ml-auto">
          <p>Legal</p>
          <div className="flex flex-col gap-3 pt-5 text-sm text-[#000000BF]">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">KYC/AML Policy</a>
          </div>
        </div>
        <div className="">
          <p>Head Office</p>
          <div className="flex flex-col gap-3 pt-5 text-sm text-[#000000BF]">
            <p>USA - 500 S 8th St, Boise, ID 83702</p>
            <p>
              Nigeria - 5th Floor, Brassars’ Place, 69 Admiralty Way, Lekki
              Phase 1, Lagos.
            </p>
          </div>
          <div className=" pt-12  ">
            <p>News letter</p>
            <div className="flex justify-between border-b border-[#00000040] items-center py-2">
              <input type="email" className="py-2" placeholder="Enter your email address" />
              <box-icon name="envelope" color="#000000BF"></box-icon>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between pt-5 gap-3 lg:pt-20 pb-2 lg:pb-6">
        <div className="w-full xl:w-4/5">
            <p className="border-b pb-2 w-fit">support@pay4me.app</p>
        </div>
        <div className="w-full">
            <p className="border-b pb-2 w-fit">(123) 456-7890</p>
        </div>
        <div className="w-full xl:w-[690px]">
            <p className="text-[#00000099]">© 2024 Pay4Me. All rights reserved.</p>
            <div className="flex gap-4 pt-4">
            <box-icon type='logo' color="#88948C" size="sm" name='facebook'></box-icon>
            <box-icon type='logo' color="#88948C" size="sm" name='twitter'></box-icon>
            <box-icon type='logo' color="#88948C" size="sm" name='instagram'></box-icon>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
