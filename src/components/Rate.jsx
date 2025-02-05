import PropTypes from "prop-types"

const Rate = ({num, title, className}) => {
  return (
    <div className={`md:py-6 p-2 md:px-10 ${className} border-[#1E0C3E33] w-full md:w-fit`}>
      <h1 className="text-[#18063C] text-center font-[sansSemibold] text-2xl md:text-3xl md:text-[3rem] lg:text-[3.6rem]">{num}</h1>
      <p className="text-xs text-center md:text-base text-[#404040] opacity-60">{title}</p>
    </div>
  )
}
Rate.propTypes = {
    num: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string
}

export default Rate
