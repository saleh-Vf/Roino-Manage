'use client';

import {useRouter} from "next/navigation";
import Image from "next/image";
import IntroFrame from 'Image/home/intro/intro.png';
import Pattern from 'Image/home/intro/pattern.png';
import Play from 'Icon/home/intro/video-play.png';

const IntroFeatures = () => {
    const router = useRouter();

    return (
        <>
            <div className="lg:flex items-center py-16">
                <div
                    className="z-10 relative bg-blue-lavender w-full pb-32 py-28 lg:rounded-r-3xl grid place-items-center order-1 px-4 lg:px-6 xl:px-14">
                    <Image src={Pattern} className="absolute top-0 -right-0 lg:left-1/2 lg:-translate-x-20 lg:top-5  z-20"/>

                    <p className="z-30 text-primary text-3xl font-black leading-relaxed w-full lg:w-96 mb-14">معرفـــــی
                        امکانات و
                        قابلیت های نرم افزار مدیریت پروژه روینــــــو</p>
                    <button
                        type="button"
                        className="bg-transparent text-primary font-bold border border-primary rounded-md px-8 py-2.5 hover:bg-primary hover:text-white duration-200"
                        onClick={() => router.push('/')}>همین
                        حالا شروع کن
                    </button>
                </div>
                {/* video frame */}
                <div
                    className="z-30 flex justify-center items-center relative -top-24 lg:right-32 xl:right-64 lg:-top-0 px-4 lg:px-6 xl:px-14">
                    <Image src={IntroFrame} alt='معرفی امکانات روینو' className="relative w-9/12 lg:w-full h-auto"/>
                    {/* play or pause video */}
                    <div
                        className="absolute -translate-y-[40%] md:-translate-y-[70%] lg:-translate-y-[40%] xl:-translate-y-[60%] 2xl:-translate-y-[50%] translate-x-0">
                        <button>
                            <Image src={Play} alt='' className="w-20 h-auto"/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroFeatures