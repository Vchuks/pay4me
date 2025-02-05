import PropTypes from "prop-types";

const Transaction = ({ pic, title, desc }) => {
  return (
    <div className="w-full md:w-[47%] xl:w-full flex gap-4 pb-5 md:pt-10">
      <div className="w-10 md:w-16">
        <img src={pic} alt="" className="w-full" />
      </div>
      <div className="w-full">
        <h6 className="text-[#12141D] font-[sansSemibold] text-base md:text-[1.215rem]">{title}</h6>
        <p className="text-sm md:text-[1.08rem] md:w-[18rem] pt-4 text-[#12141DB3] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

Transaction.propTypes = {
  pic: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};
export default Transaction;
