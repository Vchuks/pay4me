import { useRef, useCallback, useEffect } from "react";
import pic1 from "../assets/images/Rectangle 38.png";
import holder from "../assets/images/Image (1).png";

const Carousel = () => {
  let slideIndex = useRef(0);

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex.current = n));
  }

  const showSlides = useCallback(() => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    slideIndex.current++;
    if (slideIndex.current > slides.length) {
      slideIndex.current = 1;
    }
    slides[slideIndex.current - 1].style.display = "flex";
    dots[slideIndex.current-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }, []);

  useEffect(() => {
    showSlides();
  }, [showSlides]);
  return (
    <>
      {/* Slideshow container  */}
      <div className="slideshow-container ">
        <div className="mySlides flex gap-12">
          <div className="lg:w-4/5 p-4 border border-[#E8E8EA] rounded-xl">
            <img src={pic1} alt="" className="w-full" />
            <div className="">
              <p className="w-fit bg-[#03D44A0D] rounded-md px-2 py-1 text-[#03D44A] text-sm font-[sansMedium] mt-5">Education</p>
              <p className="w-[95%] text-[#181A2A] py-5 text-2xl font-[sansMedium]">Navigating International Payments for Education without Stress</p>
              <div className="text-[#97989F] flex gap-3 items-center pb-2">
                <img src={holder} alt="w-fit" />
                <p>John Ebuka</p>
                <p>December 29, 2024</p>
              </div>
            </div>
          </div>
          <div className="lg:w-4/5 p-4 border border-[#E8E8EA] rounded-xl">
            <img src={pic1} alt="" className="w-full" />
            <div className="">
              <p className="w-fit bg-[#03D44A0D] rounded-md px-2 py-1 text-[#03D44A] text-sm font-[sansMedium] mt-5">Education</p>
              <p className="w-[90%] text-[#181A2A] py-5 text-2xl font-[sansMedium]">Step by Step on How to Pay Tuition from Nigeria to Ghana</p>
              <div className="text-[#97989F] flex gap-3 items-center pb-2">
                <img src={holder} alt="w-fit" />
                <p>John Ebuka</p>
                <p>December 30, 2024</p>
              </div>
            </div>
          </div>
          <div className="lg:w-4/5 p-4 border border-[#E8E8EA] rounded-xl">
            <img src={pic1} alt="" className="w-full" />
            <div className="">
              <p className="w-fit bg-[#03D44A0D] rounded-md px-2 py-1 text-[#03D44A] text-sm font-[sansMedium] mt-5">Education</p>
              <p className=" text-[#181A2A] py-5 text-2xl font-[sansMedium]">Why Universities prefer Pay4Me app as their Africa Payment Partner</p>
              <div className="text-[#97989F] flex gap-3 items-center pb-2">
                <img src={holder} alt="w-fit" />
                <p>John Ebuka</p>
                <p>December 30, 2024</p>
              </div>
            </div>
          </div>
          
          
        </div>
        <div className="mySlides flex gap-12">
          <div className="lg:w-4/5 p-4 border border-[#E8E8EA] rounded-xl">
            <img src={pic1} alt="" className="w-full" />
            <div className="">
              <p className="w-fit bg-[#03D44A0D] rounded-md px-2 py-1 text-[#03D44A] text-sm font-[sansMedium] mt-5">Education</p>
              <p className="w-[95%] text-[#181A2A] py-5 text-2xl font-[sansMedium]">Navigating International Payments for Education without Stress</p>
              <div className="text-[#97989F] flex gap-3 items-center pb-2">
                <img src={holder} alt="w-fit" />
                <p>John Ebuka</p>
                <p>December 29, 2024</p>
              </div>
            </div>
          </div>
          <div className="lg:w-4/5 p-4 border border-[#E8E8EA] rounded-xl">
            <img src={pic1} alt="" className="w-full" />
            <div className="">
              <p className="w-fit bg-[#03D44A0D] rounded-md px-2 py-1 text-[#03D44A] text-sm font-[sansMedium] mt-5">Education</p>
              <p className="w-[90%] text-[#181A2A] py-5 text-2xl font-[sansMedium]">Step by Step on How to Pay Tuition from Nigeria to Ghana</p>
              <div className="text-[#97989F] flex gap-3 items-center pb-2">
                <img src={holder} alt="w-fit" />
                <p>John Ebuka</p>
                <p>December 30, 2024</p>
              </div>
            </div>
          </div>
          <div className="lg:w-4/5 p-4 border border-[#E8E8EA] rounded-xl">
            <img src={pic1} alt="" className="w-full" />
            <div className="">
              <p className="w-fit bg-[#03D44A0D] rounded-md px-2 py-1 text-[#03D44A] text-sm font-[sansMedium] mt-5">Education</p>
              <p className=" text-[#181A2A] py-5 text-2xl font-[sansMedium]">Why Universities prefer Pay4Me app as their Africa Payment Partner</p>
              <div className="text-[#97989F] flex gap-3 items-center pb-2">
                <img src={holder} alt="w-fit" />
                <p>John Ebuka</p>
                <p>December 30, 2024</p>
              </div>
            </div>
          </div>
          
          
        </div>
        <div className="mySlides flex gap-12">
          <div className="lg:w-4/5 p-4 border border-[#E8E8EA] rounded-xl">
            <img src={pic1} alt="" className="w-full" />
            <div className="">
              <p className="w-fit bg-[#03D44A0D] rounded-md px-2 py-1 text-[#03D44A] text-sm font-[sansMedium] mt-5">Education</p>
              <p className="w-[95%] text-[#181A2A] py-5 text-2xl font-[sansMedium]">Navigating International Payments for Education without Stress</p>
              <div className="text-[#97989F] flex gap-3 items-center pb-2">
                <img src={holder} alt="w-fit" />
                <p>John Ebuka</p>
                <p>December 29, 2024</p>
              </div>
            </div>
          </div>
          <div className="lg:w-4/5 p-4 border border-[#E8E8EA] rounded-xl">
            <img src={pic1} alt="" className="w-full" />
            <div className="">
              <p className="w-fit bg-[#03D44A0D] rounded-md px-2 py-1 text-[#03D44A] text-sm font-[sansMedium] mt-5">Education</p>
              <p className="w-[90%] text-[#181A2A] py-5 text-2xl font-[sansMedium]">Step by Step on How to Pay Tuition from Nigeria to Ghana</p>
              <div className="text-[#97989F] flex gap-3 items-center pb-2">
                <img src={holder} alt="w-fit" />
                <p>John Ebuka</p>
                <p>December 30, 2024</p>
              </div>
            </div>
          </div>
          <div className="lg:w-4/5 p-4 border border-[#E8E8EA] rounded-xl">
            <img src={pic1} alt="" className="w-full" />
            <div className="">
              <p className="w-fit bg-[#03D44A0D] rounded-md px-2 py-1 text-[#03D44A] text-sm font-[sansMedium] mt-5">Education</p>
              <p className=" text-[#181A2A] py-5 text-2xl font-[sansMedium]">Why Universities prefer Pay4Me app as their Africa Payment Partner</p>
              <div className="text-[#97989F] flex gap-3 items-center pb-2">
                <img src={holder} alt="w-fit" />
                <p>John Ebuka</p>
                <p>December 30, 2024</p>
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
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </>
  );
};

export default Carousel;
