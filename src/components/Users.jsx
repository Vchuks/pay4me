import CarouselUser from "./CarouselUser";
import circle from "../assets/images/circle.png";

const Users = () => {
  return (
    <div className="relative bg-[#EBFFF2] p-3 py-16 md:px-10 lg:px-20 xl:px-28">
      <div className="relative pt-16 pb-20 sm:w-96 md:w-full m-auto">
        <h2 className="w-80 m-auto text-center text-3xl md:text-[2.43rem] font-[sansSemibold] z-20">
          What Our Happy Users Say
        </h2>
        <img
          src={circle}
          alt=""
          className="w-[7.5rem] h-[3rem] md:w-40 absolute top-[40%] md:top-[45%]  left-[27%] md:left-[36%]  xl:left-[39%] 2xl:left-[42%] "
        />
      </div>
      <CarouselUser />
    </div>
  );
};

export default Users;
