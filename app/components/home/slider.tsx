"use client";

import { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function Slider() {
  const slides = [
    { src: "./images/home/slider/image.png" },
    {
      src: "./images/home/slider/image.png",
    },
    { src: "./images/home/slider/image.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className=" flex items-center px-5 lg:px-6 xl:px-14  ">

<div className="    md:h-10 md:w-10 h-8 w-8 border-2 border-primary md:ms-[5%]    rounded md:p-2 p-1 bg-wight text-primary cursor-pointer md:hover:bg-primary md:hover:border-withe md:hover:text-white  md:transition    md:duration-150   ">
        {/* <BsChevronCompactRight onClick={nextSlide} size={20} /> */}
      </div>
      
      <img src={slides[currentIndex].src} alt="" className=" rounded-2xl bg-center bg-cover w-[75%] h-[75%]  m-auto  mb-9 mt-9 "/>
      
      
      <div className="  md:h-10 md:w-10 h-8 w-8   border-2 border-primary md:me-[5%]   rounded md:p-2 p-1 bg-wight text-primary cursor-pointer md:hover:bg-primary md:hover:border-withe md:hover:text-white  md:transition  md:duration-150 ">
        {/* <BsChevronCompactLeft onClick={prevSlide} size={20} /> */}
      </div>
     
     
    </div>
  );
}
