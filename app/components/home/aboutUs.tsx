"use client";
import image1 from "Image/home/testimonials/image.png";
import Image from "next/image";
import { useState } from "react";
// import { AiOutlineLeft } from "react-icons/ai";
// import { AiOutlineRight } from "react-icons/ai";
const testimonialsData = [
  {
    image: image1,
    review:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    name: "بهشاد رحمان پور",
    statuse: "مدیریت شرکت",
  },
  {
    image: image1,
    review:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    name: "محمد ابراهیمی",
    statuse: "معاونت شرکت",
  },
  {
    image: image1,
    review:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    name: "صالح وفایی",
    statuse: "جانشین رییس",
  },
];

export default function aboutUs() {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className=" grid lg:grid-cols-2  gap-12 lg:gap-8  px-8 lg:px-16 md:px-16 mb-64 pb-12 lg:mb-24  ">
      <div className="lg:flex lg:flex-col grid grid-cols-2 gap-4 ">
        <div className="flex flex-col lg:pr-0 pr-12 pt-2">
        <span className=" text-purple uppercase lg:text-4xl md:text-2xl text-xl">درمورد روینو</span>
        <span className="text-purple uppercase lg:text-4xl md:text-2xl text-xl">چه می شنویم؟</span>
        <span className="  hidden lg:block text-sm font-bold w-8/12 mt-4 text-gray text-justify ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است
        </span>
        </div>
        <div className="  object-cover  lg:top-48 lg:justify-start lg:pl-0 h-8   pt-8 gap-2 flex justify-end pl-12 ">
        
          {/* <AiOutlineRight onClick={()=>{
            selected===0 ? setSelected(tLength -1): setSelected((prev)=> prev-1 )
          }} className="cursor-pointer w-8 h-8 border-2 border-gray rounded-lg text-gray hover:text-primary hover:border-primary transition  duration-75" />
          <AiOutlineLeft onClick={()=>{
            selected===tLength -1 ? setSelected(0) : setSelected((prev)=> prev +1)

          }} className="cursor-pointer w-8 h-8 border-2 border-gray rounded-lg text-gray hover:text-primary hover:border-primary transition  duration-75"/> */}
        </div>
      </div>
      {/* left */}
      <div className="flex-initial gap-2 pt-1  relative  ">
        {/* card */}
        <div className=" shadow-md h-44 md:h-36 lg:h-44 bg-white  rotate-[-4deg] float-left shadow-gray absolute top-10 w-[60%] -left-3 z-10 rounded-2xl "></div>
        <div className=" shadow-md h-52 md:h-44 lg:h-52 rotate-[-4deg] float-left bg-white shadow-gray absolute top-6 w-[55%] left-3 z-20 rounded-2xl "></div>
        <div className="flex flex-1 gap-2 flex-col items-center justify-center p-8 shadow-md shadow-gray text-center bg-white   absolute mx-10 z-30 rounded-2xl ">
          <div className="max-w-2xl mx-auto mb-4 text-gray lg:mb-8 text-justify">
            <p className="my-4 md:text-lg text-sm">{testimonialsData[selected].review}</p>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Image
              className="rounded-full w-9 h-9"
              src={testimonialsData[selected].image}
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-purple text-left md:text-lg text-sm">
              <div>{testimonialsData[selected].name}</div>
              <div className="text-sm text-gray  ">
                {testimonialsData[selected].statuse}
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}
