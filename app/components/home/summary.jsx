import Image from "next/image";
import TaskRoino from 'Image/home/task.png';
import Link from "next/link";
import HeadphoneFrame from 'Icon/home/frame.png';

const Summary = () => {
    return (
        <div className="block lg:flex gap-6 justify-between px-5 lg:px-6 xl:px-14 py-20">
            <Image src={TaskRoino} alt='شعار روینو' className="order-2 lg:m-0 m-auto lg:w-1/3 h-full"/>

            <div className="order-1 pt-16">
                <p className="text-2xl font-black">مدیریت پروژه هات رو به <span className="text-primary">روینـــــو</span> بسپار</p>
                <p className="text-sm font-bold w-8/12 mt-4 text-gray">با روینـــو مدیریت تمام کارها و پروژه های فردی و
                    تیمی در دستان
                    توست</p>
                <div className="flex items-center gap-4 mt-16 text-center">
                    <Link href='/' className="bg-primary font-bold text-white py-3 px-2 lg:px-3 xl:px-4 rounded-xl shadow-md w-full">رایگان
                        شروع کنید:)</Link>
                    <Link href='/' className="bg-white font-bold py-2.5 px-5 rounded-xl w-full">درخواست دمو</Link>
                </div>
                <Image src={HeadphoneFrame} alt='' className=" mb-10 mt-14 lg:mt-16"/>
            </div>
        </div>
    )
}

export default Summary