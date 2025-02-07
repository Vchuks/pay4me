import code from "../assets/images/code.png"
import phone from "../assets/images/phone.png"

const QR = () => {
  return (
    <div className="w-[95%] md:w-[80%] relative m-auto bg-[#03D44A] mb-10 rounded-[10.8px] py-8  md:py-14">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-white text-3xl md:text-[38.88px] font-[sansBold]">Scan QR Code to Download</h2>
        <p className="text-center md:w-[25rem] md:text-[19.44px] pt-4 pb-8 font-[sansLight] text-white px-2 md:px-0">
          Our custom QR code will take you to your app store to download our
          awesome native apps
        </p>
        <img src={code} alt="" className="w-60 md:w-[23rem]" />
      </div>
        <img src={phone} alt="" className="hidden lg:block w-52 xl:w-80 absolute right-0 bottom-0" />
    </div>
  );
};

export default QR;
