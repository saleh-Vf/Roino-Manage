
// import { BsCalendar4Week } from "react-icons/bs";
// import { TfiBarChart} from "react-icons/tfi";
// import {VscChecklist} from "react-icons/vsc";
// import { MdManageHistory } from "react-icons/md";
// import {AiOutlineFileDone }from "react-icons/ai";
// import {SlNote  }from "react-icons/sl";
// import {TbBrandTelegram} from "react-icons/tb";
// import {MdOutlineNotificationsActive} from "react-icons/md";
import Vector from "Image/home/experience/Vector.png";
import Image from "next/image";

const ItemExp = (props)=>{
  return (
    <div className="text-center   cursor-pointer  flex justify-center items-center">
      <div className="flex w-full h-full flex-col items-center">
        <div className="relative flex justify-center items-center group h-16 w-16">
          <div className="absolute rounded-md h-16 w-16 group-hover:rotate-45 transition-all bg-blue-lavender group-hover:bg-primary"></div>
          {/* {props.icon} */}
        </div>
        <h4 className="lg:text-xl font-bold mt-[11.5px] inset-y-24 content-center text-primary whitespace-nowrap mt-[18px]">
            {props.title}
        </h4>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <div  className="bg-color-primary-light px-5 lg:px-6 xl:px-14 py-10 flex items-center justify-center">
      <div className="container py-20">
        <div className="text-center m-auto  lg:text-5xl text-2xl   h-16 top-16 left-[25%] ">
          <h2 className=" text-primary mb-0.5 font-black  ">
            امکانات فوق حرفه ای روینو
          </h2>
          <div className=" ">
            <Image  src={Vector} alt="" className=" top-1  w-1/6 h-1/2 text-center m-auto "/>
          </div>
        </div>
        <div className="grid lg:grid-cols-8 lg:gap-6  md:grid-cols-4 grid-cols-2 gap-6 px-5 lg:px-6 xl:px-14 py-20">
          <ItemExp title={"تقویم"} /> 
          <ItemExp title={"مدیریت پروژه"} /> 
          <ItemExp title={"کنترل وظایف"} /> 
          <ItemExp title={"کنترل آماری"} /> 
          <ItemExp title={"مدیریت فایل"} /> 
          <ItemExp title={"یادداشت ها"} /> 
          <ItemExp title={"گروه و کانال"} /> 
          <ItemExp title={"اعلان هوشمند"} /> 
        </div>
      </div>
    </div>
  );
}
