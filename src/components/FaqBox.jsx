import { useState } from "react";
import PropTypes from "prop-types";

const FaqBox = ({question, answer}) => {
    const [showAnswer, setShowAnswer] = useState(false);
 

  return (
    <div className="sticky top-0">
      {" "}
      <div
        className="w-full border-b  border-[#E4E6E7] p-3 md:py-6 md:px-4 flex justify-between items-center "
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <p className="">{question}</p>
        {showAnswer ? <box-icon name="chevron-up"></box-icon> : <box-icon name="chevron-down"></box-icon>}
      </div>
      {showAnswer && <p className="p-3 md:py-6 md:px-4 mb-4 border border-[#E4E6E7]  rounded-b-xl">{answer}</p>}
    </div>
  );
};

FaqBox.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string
}

export default FaqBox;
