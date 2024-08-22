'use client';
import { useState } from 'react';
import Image from "next/image";
import LockIcon from"Icon/login/lock.png";
import EmailIcon from"Icon/login/sms.png"
import GmailIcon from'Icon/login/gmail.png'
import GithubIcon from'Icon/login/github.png'
import Logo from "Image/login/Vector.png";
import Object  from "Image/login/OBJECTS.png";
// import {AiOutlineUserAdd} from "react-icons/ai"
// import {AiOutlineKey} from "react-icons/ai"
// import {RiEyeLine} from "react-icons/ri"
// import {RiEyeOffLine} from "react-icons/ri"


function Login() {

    // const [eye,Seteye] = useState(<RiEyeOffLine/>);
    const [inputType,setInputType] = useState("password");
    const [title,set_title] = useState("ثبت نام در روینــــــــو")
    const [caption,set_caption] = useState("به روینو خوش اومدی! برای عضویت یکی از راه های زیر رو انتخاب کن");
    const[class_forgetPass,set_class_forgetPass]=useState("hidden");
    const[innerButton,set_innerButton]=useState("ثبت نام");
    const [signUpBorder,setSignupBorder] = useState("border-dashed");
    const [loginBorder,setSigninBorder] = useState("border-none");
    return(
        <>
        <section className="flex justify-between h-screen ">
            <section className="flex bg-white flex-col items-center gap-[4vh] w-full lg:basis-1/2">

                <a href='#' className="p-2 flex justify-center">
                    <Image className="bg-main p-2 rounded-lg" src={Logo} alt='roino logo' width={50} height={50}/>
                </a>
                <div className="flex justify-center text-primary gap-5">
                    <button onClick={signup} className={`duration-200 px-6 py-2 rounded-lg bg-main flex items-center gap-2 hover:bg-primary hover:text-main ${signUpBorder} border-2 border-primary`} > ثبت نام </button>
                    <button onClick={signin} className={`duration-200 px-6 py-2 rounded-lg bg-main flex items-center gap-2 hover:bg-primary hover:text-main ${loginBorder} border-2 border-primary`}>ورود  </button>
                </div>       

                <div className="flex flex-col gap-2">
                    <p id="title" className="text-center text-gray text-2xl font-bold ">{title}</p>        
                    <p className="text-center text-gray">{caption}</p>
                </div>

                <div className='flex justify-center gap-[1vw] w-full'>
                    <button className=" py-2 px-2 sm:px-3 flex items-center gap-2 rounded-md duration-300 hover:-translate-y-1 hover:shadow-md" >
                        <Image src={GmailIcon} alt="login with google"/>
                        <p>{innerButton} با گوگل</p>
                    </button>
                    <button className=" py-2 px-2 sm:px-3 flex items-center gap-2 rounded-md duration-300 hover:-translate-y-1 hover:shadow-md">
                        <Image src={GithubIcon} alt='login with github'/>
                        <p>{innerButton} با گیت هاب</p>
                    </button>
                    
                </div>
                <div className='flex w-3/4 gap-3 items-center'>
                    <span className=' bg-zinc-300 h-px w-full rounded-lg'></span>
                    <p className='text-gray'>یا</p>
                    <span className=' bg-zinc-300 h-px w-full rounded-lg'></span>
                </div>

                <form className="flex flex-col items-center gap-5 w-full" action="">
                    <div className="flex gap-2 bg-main px-2 rounded-lg w-11/12 sm:w-2/3">

                        <label className='py-2' htmlFor="email">
                        <Image src={EmailIcon}/>
                        </label>
                        <input id='email' className="w-full h-full outline-0 bg-main" type="text" placeholder="ایمیل"/>

                    </div>
                    <div className="flex items-center gap-2 bg-main px-2 rounded-lg w-11/12 sm:w-2/3" >

                        <label className='py-2' htmlFor="password">
                        <Image src={LockIcon}/>
                        </label>
                        <input id='password' className="outline-0 bg-main w-11/12 h-full" type={inputType} placeholder="گذرواژه"/>
                        <i  onClick={changeIcon} className='text-primary cursor-pointer' >
                            {eye}
                        </i>

                    </div>
                    <small className='text-gray p-2-lg w-11/12 sm:w-2/3 cursor-pointer hover:text-primary' ><a className={class_forgetPass} href="#">رمز رو فراموش کرده اید؟</a></small>

                    <button className="duration-500 bg-primary p-2 text-white rounded-lg w-11/12 sm:w-2/3 hover:scale-105 hover:shadow-xl" type="submit">{innerButton}</button>
                </form>

            </section>
            <section className="hidden justify-center items-center basis-4.5/10 lg:basis-1/2 md:flex">
                <Image alt='Object' src={Object}/>
            </section>
         </section>
        </>
    )
    function signup(){
        set_title("ثبت نام در روینــــــــو");
        set_caption("به روینو خوش اومدی! برای عضویت یکی از راه های زیر رو انتخاب کن");
        set_class_forgetPass("hidden");
        set_innerButton("ثبت نام");
        setSignupBorder("border-dashed")
        setSigninBorder("border-none");    
    }
    function signin(){
        set_title("ســــلام رفیــــق!");
        set_caption("به خونه خوش اومدی! اگه عضو روینـــو هستی، وارد شو");
        set_class_forgetPass("flex");
        set_innerButton("ورود");
        setSignupBorder("border-none")
        setSigninBorder("border-dashed"); 
    }



    function changeIcon() {
        
        if (eye.type.name == "RiEyeOffLine") {
            // Seteye(<RiEyeLine/>);
            setInputType("text")
        }
        else{
            // Seteye(<RiEyeOffLine/>)
            setInputType("password")

        }
    }


}
export default Login
