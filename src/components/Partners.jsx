import pic1 from "../assets/images/1 1.png";
import pic2 from "../assets/images/2 1.png";
import pic3 from "../assets/images/3 1.png";
import pic4 from "../assets/images/4 1.png";
import pic5 from "../assets/images/5 1.png";
import pic6 from "../assets/images/6 1.png";
import pic7 from "../assets/images/7 1.png";
import pic8 from "../assets/images/8 1.png";
const Partners = () => {
  const list = [
    {
      id: "1",
      pic: pic1,
    },
    {
      id: "2",
      pic: pic2,
    },
    {
      id: "3",
      pic: pic3,
    },
    {
      id: "4",
      pic: pic4,
    },
    {
      id: "5",
      pic: pic5,
    },
    {
      id: "6",
      pic: pic6,
    },
    {
      id: "7",
      pic: pic7,
    },
    {
      id: "8",
      pic: pic8,
    },
  ];
  return (
    <div className="p-3 pt-14  md:pt-16 md:pb-72 md:px-10 lg:px-20 xl:px-28">
      <h2 className="text-center text-3xl md:text-[38.88px] text-[#12141D] font-[sansBold]">Trusted by Partners</h2>
      <p className="md:w-96 m-auto pt-3 text-center md:text-[19.44px] text-[#12141DB3]">
        Partners in growth, leaders in innovation. Driving success, we achieve
        more.
      </p>
      <div className="md:w-[90%] m-auto flex gap-2 flex-wrap justify-center py-12">
        {list.map((each) => (
          <img key={each.id} src={each.pic} alt="" className="w-32 md:w-44" />
        ))}
      </div>
    </div>
  );
};

export default Partners;
