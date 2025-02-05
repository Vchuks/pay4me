const Hero = () => {
  return (
    <div className="bg-[url('../src/assets/images/herobg.png')] bg-contain xl:bg-cover xl:bg-center bg-no-repeat flex flex-col lg:flex-row items-end py-4 md:py-20">
      <div className="w-full px-4 md:px-10 lg:pl-24 lg:pr-0">
        <h1 className="leading-snug text-3xl md:text-5xl lg:text-6xl text-[#18063C] font-[sansSemibold] w-full md:w-2/4 lg:w-[30rem] lg:text-[2.7rem] xl:text-[3.2rem] lg:pt-10 xl:pt-28">
          Cross-Border Payments For International Students
        </h1>
        <p className="lg:text-lg w-full md:w-[30rem] lg:w-[23rem] xl:w-[30rem] py-5 font-[sansLight] leading-loose">
          The easiest and fastest way to pay tuition and fees to educational
          institutions, businesses, and government agencies worldwide.
        </p>
        <button className="rounded-[1.3806rem] bg-black  text-white flex items-center p-2">
          <box-icon
            type="logo"
            color="#ffffff"
            size="md"
            name="apple"
          ></box-icon>
          <box-icon
            type="logo"
            color="#ffffff"
            size="md"
            name="play-store"
          ></box-icon>
          <p className="font-[einaSM] text-sm w-36">
            Download on the <span className="text-xl md:text-[1.5625rem]">App Store</span>
          </p>
        </button>
      </div>
      <div className="w-full"></div>
    </div>
  );
};

export default Hero;
