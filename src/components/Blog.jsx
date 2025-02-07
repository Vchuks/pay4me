import payment from "../assets/images/payments.png"
import circle from "../assets/images/circle.png"
import Carousel from "./Carousel"

const Blog = () => {
  return (
    <div className="relative p-3 md:px-10 lg:px-20 xl:px-28 ">
          <div className="w-24 md:w-40 absolute top-0 left-0">
            <img src={payment} alt="" className="w-full" />
          </div>
          <div className="relative pt-14 pb-20 sm:w-96 md:w-full m-auto">
            <h2 className="w-72 m-auto text-center text-[#12141D] text-3xl md:text-[2.43rem] font-[sansBold]">
              Latest Blog and Resources
            </h2>
            <img
              src={circle}
              alt=""
              className="w-52 md:w-60 absolute top-[39%] left-[22%] md:left-[39%] xl:left-[43%] 2xl:left-[44.5%] h-16 " 
            />
          </div>
          
          <Carousel/>
    </div>
  )
}

export default Blog
