import faqList from "./FaqList";
import FaqBox from "./FaqBox";

const FAQ = () => {
  
  return (
    <div className="p-3 pb-10 md:px-10 lg:px-20 xl:px-28 md:pt-2 font-[sansLight]">
      <h2 className="p-3 md:p-4 border-b-2 border-[#181A1D] text-[#181A1D] text-2xl md:text-[37.44px]">
        FAQs
      </h2>
      <div className="md:text-[21.39px]">
        {faqList.map((eachQst) => {
          return <FaqBox key={eachQst.id} answer={eachQst.answer} question={eachQst.question}/>;
        })}
      </div>
    </div>
  );
};

export default FAQ;
