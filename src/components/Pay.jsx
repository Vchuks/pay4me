import person from "../assets/images/person.png";
import person2 from "../assets/images/Component 2.png";
import naira from "../assets/images/naira.png"
import payment from "../assets/images/payments.png"

const Pay = () => {
  return (
    <div className="p-3 relative md:px-10 lg:px-20 xl:px-28">
        <div className="w-24 md:w-40 absolute top-0 left-0">
          <img
            src={naira}
            alt=""
            className="w-full"
          />
        </div>
      <div className="relative flex items-center flex-col lg:flex-row gap-8 lg:pt-20">
        <div className="w-16 md:w-24 absolute top-5 right-0">
          <img
            src={payment}
            alt=""
            className="w-full"
          />
        </div>
        <div className="w-full ">
          <img
            src={person}
            alt=""
            className="w-[70%] lg:w-[85%] m-auto lg:m-0"
          />
        </div>
        <div className="w-full">
          <h2 className="text-[#12141D] w-full lg:w-96 font-[sansSemibold] text-3xl md:text-[2.43rem]">
            Super Fast Tuition and School Fees Payments
          </h2>
          <p className="text-[#12141DB3] lg:w-[28rem] my-5 md:text-[17.28px]">
            Give your customers a tailored assistance based on their unique
            needs. They receive relevant and timely support, customized to their
            specific queries.
          </p>
          <button className="rounded-[1.9125rem] text-white bg-[#03D44A] font-[sansMedium] py-[0.8em] px-[1.7em] mt-3">
            Make A Payment
          </button>
        </div>
      </div>

      <div className="flex items-center flex-col-reverse lg:flex-row gap-8 lg:pt-20">
        <div className="w-full">
          <h2 className="text-[#12141D] w-full lg:w-[23rem] font-[sansSemibold] text-3xl md:text-[2.43rem]">
            Pay for SEVIS, WES, Visa, Applications & More
          </h2>
          <p className="text-[#12141DB3] lg:w-[30rem] my-5 md:text-[17.28px]">
            We help you get closer to your study abroad and relocation goals
            faster by promptly completing your payment orders for credential
            evaluation, immigration, and visa purposes.
          </p>
          <button className="rounded-[1.9125rem] text-white bg-[#03D44A] font-[sansMedium] py-[0.8em] px-[1.7em] mt-3">
            Get Started
          </button>
        </div>
        <div className="w-full">
          <img
            src={person2}
            alt=""
            className="w-[70%] lg:w-[85%] m-auto lg:m-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Pay;
