"use client";

import image1 from "Image/home/testimonials/image.png";
import Image from "next/image";
import { useEffect, useState } from "react";
// import { AiOutlineLeft } from "react-icons/ai";
// import { AiOutlineRight } from "react-icons/ai";

// import { GiHomeGarage } from "react-icons/gi";
// import { MdOutlineHomeWork } from "react-icons/md";
// import { BsHouses } from "react-icons/bs";
// import { GiRainbowStar } from "react-icons/gi";
import styles from "Styles/service.module.scss";
import useGetDevice from "@/app/lib/get-devices";

const plan = [
  {
    // icon: <MdOutlineHomeWork size={72} />,
    user_type: "پایه",
    multi_user: "30کاربره",
    user_space: "30",
    price: "8000تومان",
  },
  {
    // icon: <BsHouses size={72} />,
    user_type: "اقتصادی",
    multi_user: "30کاربره",
    user_space: "30",
    price: "7000تومان",
  },
  {
    // icon: <GiHomeGarage size={72} />,
    user_type: "استاندارد",
    multi_user: "30کاربره",
    user_space: "30",
    price: "6000تومان",
  },
  {
    // icon: <GiRainbowStar size={72} />,
    user_type: "حرفه ای",
    multi_user: "30کاربره",
    user_space: "30",
    price: "3000تومان",
  },
  {
    // icon: <MdOutlineHomeWork size={72} />,
    user_type: "پایه",
    multi_user: "80کاربره",
    user_space: "3",
    price: "3000تومان",
  },
  {
    // icon: <BsHouses size={72} />,
    user_type: "اقتصادی",
    multi_user: "80کاربره",
    user_space: "3",
    price: "3000تومان",
  },
  {
    // icon: <GiHomeGarage size={72} />,
    user_type: "استاندارد",
    multi_user: "80کاربره",
    user_space: "3",
    price: "3000تومان",
  },
  {
    // icon: <GiRainbowStar size={72} />,
    user_type: "حرفه ای",
    multi_user: "80کاربره",
    user_space: "3",
    price: "3000تومان",
  },
];
const useGetDeviceWidth = (width) => {
      const devices = {sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400};
      switch (true) {
          case width >= devices.lg:
              return "lg";
          case width >= devices.md:
              return "md";
          case width >= devices.sm:
              return "sm";
          default:
              return "sm"
      }
  }
const CartServices = (props)=>{
  

  const [first_style,set_firstS] = useState("")
  const [second_style,set_secondS] = useState("")
  const [third_Style,set_thirdS] = useState("")
  const [four_style,set_fourS] = useState("")
  const [opacity,set_opacity] = useState("")
  useEffect(()=>{
    if(useGetDeviceWidth(window.innerWidth) == "sm"){
      if(first_style == ""){
        if(props.index == Math.floor(props.item_scrolled)){
          set_firstS(" !bg-white")
          set_secondS(" !bg-[#4766F9]")
          set_thirdS(" !text-white")
          set_fourS(" !text-[#445AF7] !bg-white")
          set_opacity("")
        }
      }else{
        if(props.index != Math.floor(props.item_scrolled)){
          set_firstS("")
          set_secondS("")
          set_thirdS("")
          set_fourS("")
          set_opacity(" opacity-[0.5]")
        }
      }
      
    }else{
      if(opacity != "" || first_style != "" ){
        console.log("this run")
        set_firstS("")
        set_secondS("")
        set_thirdS("")
        set_fourS("")
        set_opacity("")
      }
      
    }
  })
  return (
    <div dir="rtl" className={"md:min-w-full min-w-[75%] snap-center group transition-all w-full bg-[#E8ECFF] hover:bg-white focus:bg-white md:h-[550px] h-[500px] rounded-[20px] flex flex-col items-center justify-start md:m-[0] " + (props.last_index==props.index ?"mr-[15%]":(props.index==0?"ml-[15%]":"")) + first_style + opacity}>
      <div className="mt-[27.94px] flex flex-col items-center text-[#445AF7]">
        {props.item.icon}
        <span className="mt-[27.94px] text-[30px]" style={{fontWeight:"900"}}>{props.item.user_type}</span>
      </div>
      <div className="flex flex-row h-[30px] w-full z-[2]">
        <div className="w-[30px] h-[60px] rounded-l-full bg-main"></div>
        <div className="grow"></div>
        <div className="w-[30px] h-[60px] rounded-r-full bg-main"></div>
      </div>
      <div className="w-full mx-[30px] border-dashed	border-t-[5px] border-[#1B2B99] overflow-hidden"></div>
      <div className={"w-full h-[40px] group-hover:bg-[#4766F9] group-focus:bg-[#4766F9] bg-white z-[1] transition-all"+second_style}></div>
      <div className={"group-hover:bg-[#4766F9] group-focus:bg-[#4766F9] transition-all group-hover:text-white group-focus:text-white drop-shadow-xl hover:drop-shadow-2xl flex flex-col items-center pt-[9.26px] pb-[25.74px] h-full bg-white w-full rounded-b-[20px]" + second_style+third_Style}>
        <span className="text-[24px] font-[700]">{props.item.multi_user}</span>
        <span className="text-[20px] font-[700] mt-[18px] text-center">{props.item.user_space} <span className={"text-[20px] font-[700] text-[#1B2B99] mt-[18px] group-hover:text-white group-focus:text-white transition-all"+third_Style}>گیگابایت فضای کاربری</span></span>
        <div className="grow"></div>
        <span className={"text-[#1D2935] group-focus:text-white group-hover:text-white text-[30px] font-[900] transition-all" + third_Style}>{props.item.price}</span>
        <span className={"font-[700] transition-all px-[36px] py-[16px] bg-[#445AF7] rounded-[12px] text-white text-[20px] group-hover:text-[#445AF7] group-hover:bg-white mt-[43px]" + (four_style)}>شروع کنید</span>
      </div>
    </div>
  )
}

const ListServices = (props)=> {
  const [item_scrolled,set_item_scrolled] = useState(0)
  function onScrollEvent(e){
    const item = document.getElementById("scroll-servises")
    set_item_scrolled(item.scrollLeft / (item.offsetWidth * 0.75))
    console.log(item.scrollLeft / (item.offsetWidth * 0.75))
  }
  return (
    <>
      <div style={{scrollSnapType:"x mandatory"}} dir="ltr" onScroll={(e)=>{onScrollEvent(e)}} onTouchMove={(e)=>onScrollEvent(e)} id="scroll-servises" className="w-full md:grid flex overflow-x-scroll md:overflow-x-hidden lg:grid-cols-4 md:grid-cols-2 lg:px-[50px] md:px-[70px] my-[10px] md:gap-x-[42px] py-[60px] gap-x-[20px] gap-y-[50px]">
        {plan.slice(props.start,props.end).map((item,index)=>{
          return <CartServices item={item} index={index} last_index={7} item_scrolled={item_scrolled} />
        })}
      </div>
    </>
  )
}


export default function Services(){
  const [month_select,set_month_select] = useState(true)
  const [start_end,set_start_end] = useState({start:0,end:4})
  const [is_size,set_is_size] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(()=>{
    
    
    if(!is_size){
      
      if(useGetDeviceWidth(window.innerWidth) == "sm"){
        set_start_end({start:0,end:8})
        
      }else{
        if(month_select){
          set_start_end({start:0,end:4})
        }else{
          set_start_end({start:4,end:8})
        }
      }
      set_is_size(true)
    }
    function endresize() {
      console.log("This Is Runed")
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      set_is_size(false)
    }
    var resizeId
    window.addEventListener("resize", ()=>{
      clearTimeout(resizeId);
      resizeId = setTimeout(endresize, 500);
    });
    
  })
  
  return (
    <>
      <div className="mt-[64px] mb-[100px] flex flex-col md:items-center items-start w-full">
          <h4 className="lg:text-4xl text-[20px] mr-[15%] md:mr-[0] font-black text-primary ">
            پلن سرویس ها
          </h4>
          <div className="flex-row rounded-[20px] bg-white mt-[30px] md:flex hidden">
            <div onClick={()=>{set_month_select(true);set_is_size(false)}} className={"w-[140px] h-[50px] rounded-r-[20px] flex items-center justify-center hover:bg-[#1B2B99] group transition-all " + (month_select?"bg-[#1B2B99]":"")}> 
              <span className={"text-[20px] transition-all font-[900] group-hover:text-white " + (month_select?"text-white":"text-[#1B2B99]")}>ماهیانه</span>
            </div>
            <div onClick={()=>{set_month_select(false);set_is_size(false)}} className={"w-[140px] h-[50px] rounded-l-[20px] flex items-center justify-center hover:bg-[#1B2B99] group transition-all " + (!month_select?"bg-[#1B2B99]":"")}> 
              <span className={"text-[20px] transition-all font-[900] flex items-end group-hover:text-white " + (!month_select?"text-white":"text-[#1B2B99]")}>سالیانه <span className="text-[10px]">(30% تخفیف)</span></span>
            </div>
          </div>
        <ListServices start={start_end.start} end={start_end.end} />
      </div>
    </>
  )
}