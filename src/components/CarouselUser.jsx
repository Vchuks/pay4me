import { useRef, useCallback, useEffect } from "react";
import pic1 from "../assets/images/Ellipse 14.png";
import pic2 from "../assets/images/Ellipse 14 (1).png";
import pic3 from "../assets/images/Ellipse 14 (2).png";

const CarouselUser = () => {
  let slideIndex = useRef(0);

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex.current = n));
  }

  const showSlides = useCallback(() => {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    let dots = document.getElementsByClassName("dot2");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active2", "");
    }
    slideIndex.current++;
    if (slideIndex.current > slides.length) {
      slideIndex.current = 1;
    }
    slides[slideIndex.current - 1].style.display = "flex";
    dots[slideIndex.current - 1].className += " active2";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }, []);

  useEffect(() => {
    showSlides();
  }, [showSlides]);
  return (
    <>
      {/* Slideshow container  */}
      <div className="slideshow-container">
        <div className="mySlides2 flex gap-12">
          <div className="lg:w-4/5 p-4 flex flex-col gap-6 items-center bg-white rounded-[10.8px] shadow ">
            <div className="w-20 ">
              <img src={pic1} alt="" className="w-full" />
            </div>
            <div className="">
              <p className="text-center xl:w-[17rem]">
              “I just simply love tools that make my life easier! I have everything that I need in one place, and that allows my tuition payments to be more organized.”
              </p>
              <div className="text-[17.28px] text-center pt-8">
                <p className="text-[#12141D] pb-2 font-[sansSemibold]">Jenny Wilson</p>
                <p className="text-[#52525B]">Immigrant</p>
              </div>
            </div>
          </div>
          <div className="lg:w-4/5 p-4 flex flex-col gap-6 items-center bg-white rounded-[10.8px] shadow ">
            <div className="w-20 ">
              <img src={pic2} alt="" className="w-full" />
            </div>
            <div className="">
              <p className="text-center xl:w-[17rem]">
              The way this app is designed and scoped is absolutely awesome! It surpasses all competition in its efforts to satisfy every need and desire!
              </p>
              <div className="text-[17.28px] text-center pt-8">
                <p className="text-[#12141D] pb-2 font-[sansSemibold]">Jessy Yusuf</p>
                <p className="text-[#52525B]">Student</p>
              </div>
            </div>
          </div>
          <div className="lg:w-4/5 p-4 flex flex-col gap-6 items-center bg-white rounded-[10.8px] shadow ">
            <div className="w-20 ">
              <img src={pic3} alt="" className="w-full" />
            </div>
            <div className="">
              <p className="text-center xl:w-[17rem]">
              “Very easy to use and set up is simple. I can easily provide live support to my website visitors in real-time. It also provides many integrations.”
              </p>
              <div className="text-[17.28px] text-center pt-8">
                <p className="text-[#12141D] pb-2 font-[sansSemibold]">Emma Kristin</p>
                <p className="text-[#52525B]">Student</p>
              </div>
            </div>
          </div>
          
        </div>

        {/* <div className="mySlides fade">
    <img src={pic1}  alt=""/>
    <div className="text">Caption Three</div>
  </div>
  <div className="mySlides fade">
    <img src={pic1}  alt=""/>
    <div className="text">Caption four</div>
  </div> */}
      </div>

      {/* The dots/circles  */}
      <div className="text-center pt-6">
        <span className="dot2" onClick={() => currentSlide(1)}></span>
        <span className="dot2" onClick={() => currentSlide(2)}></span>
        <span className="dot2" onClick={() => currentSlide(3)}></span>
      </div>
    </>
  );
};

export default CarouselUser;
