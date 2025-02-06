import circle from "../assets/images/circle.png";
import naira from "../assets/images/naira.png";
import pic1 from "../assets/images/Icon (2).png";
import pic2 from "../assets/images/Icon (1).png";
import pic3 from "../assets/images/Icon.png";
import pic4 from "../assets/images/Group 19.png";
import pic5 from "../assets/images/Group 20.png";

const Work = () => {
  return (
    <div className="relative p-3 md:px-10 lg:px-20 xl:px-28">
      <div className="w-24 md:w-40 absolute top-0 right-0">
        <img src={naira} alt="" className="w-full" />
      </div>
      <div className="relative pt-14 pb-20">
        <h2 className="text-center text-3xl md:text-[2.43rem] font-[sansSemibold]">
          How it works?
        </h2>
        <img
          src={circle}
          alt=""
          className="w-[7.5rem] md:w-40 absolute top-[25%]  left-[47%] md:left-[48.8%] "
        />
      </div>

      <section className="relative flex flex-col lg:flex-row justify-center gap-6 ">
        <div className="w-full flex flex-col gap-8 items-center ">
          <div className="w-22">
            <img src={pic1} alt="" className="w-full" />
          </div>
          <div>
            <p className="text-[22px] text-center font-[sansSemibold]  pb-4">Download Pay4Me App</p>
            <p className="text-center w-60 text-[#333333]">
              Get the latest version of the Pay4Me app from your preferred
              mobile store.
            </p>
          </div>
        </div>
        <div className="hidden lg:block lg:w-40 xl:w-48 absolute left-[23.5%] 2xl:left-[26%] top-1/7">
          <img src={pic4} alt="" className="w-full" />
        </div>
        <div className="w-full flex flex-col gap-8 items-center">
          <div className="w-22">
            <img src={pic2} alt="" className="w-full" />
          </div>
          <div>
            <p className="text-[22px] text-center font-[sansSemibold]  pb-4">Sign Up</p>
            <p className="text-center w-60 text-[#333333]">
            Create an account with just a few easy steps, stress and cash free.
            </p>
          </div>
        </div>
        <div className="hidden lg:block lg:w-40 xl:w-48 right-[23.5%] 2xl:right-[26%] top-1/7 absolute">
          <img src={pic5} alt="" className="w-full" />
        </div>
        <div className="w-full flex flex-col gap-8 items-center">
          <div className="w-22">
            <img src={pic3} alt="" className="w-full" />
          </div>
          <div>
            <p className="text-[22px] text-center font-[sansSemibold]  pb-4">Make Fast Payments</p>
            <p className="text-center w-60 text-[#333333]">
            Start making international payments seamlessly with various institutions and applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
