import Image from "next/image";
import Link from "next/link";
import PatternIcon from 'Icon/home/features/pattern.png'
import EllipseIcon from 'Icon/home/features/ellipse.png'
// import {BsClockFill,BsFillCalendarWeekFill} from 'react-icons/bs';
// import {BiSupport} from 'react-icons/bi';
// import {PiSirenFill} from "react-icons/pi"
// import {IconType} from "react-icons";
import Styles from "Styles/home.module.scss"

const Features = () => {
    interface features {
        // icon: IconType,
        title: string,
        description: string,
        active?: boolean,
        top?: boolean
    }

    const features: features[] = [
        {
            // icon: BiSupport,
            title: 'پشتیبانی ۲۴ ساعته',
            description: 'به کمک این نرم افزار می توانید زمان خود را آسان مدیریت کنید',
            top: true,
        },
        {
            // icon: BsClockFill,
            title: 'مدیریت زمان',
            description: 'به کمک این نرم افزار می توانید زمان خود را آسان مدیریت کنید',
            active: true
        },
        {
            // icon: PiSirenFill,
            title: 'اعلان هوشمند',
            description: 'به کمک این نرم افزار می توانید زمان خود را آسان مدیریت کنید',
            top: true,
        },
        {
            // icon: BsFillCalendarWeekFill,
            title: 'مدیریت تسک',
            description: 'به کمک این نرم افزار می توانید زمان خود را آسان مدیریت کنید',
        },
    ]

    return (
        <div className="relative px-5 lg:px-6 xl:px-14 py-16">
            {/* pattern */}
            <div className="absolute -right-6 -top-20 lg:top-16">
                <Image src={PatternIcon} className="relative z-10 -right-2 top-4" alt=''/>
                <Image src={EllipseIcon} className="relative -top-20 right-6" alt=''/>
            </div>

            <div className="block lg:flex justify-between items-center relative z-20">

                <div className="my-6">
                    <p className="text-2xl text-purple font-black">ویژگی هـای روینـــــــو</p>
                    <div className="hidden lg:block">
                        <p className="text-gray text-base mt-7 mb-10 lg:w-2/3">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                            است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                            تکنولوژی
                            مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                        </p>
                        <Link href='/' className="text-purple py-2 px-6 border border-purple bg-transparent rounded-lg hover:bg-purple hover:text-white duration-200">بیشتر
                            بدانید</Link>
                    </div>
                </div>
                {/* features */}
                <div className="grid grid-cols-2 gap-6 w-full lg:w-11/12 xl:w-10/12 2xl:w-9/12 px-3 lg:px-0">
                    {features.map((feature, index) => (
                        <div
                            className={`${Styles.feature_card} w-full xl:w-9/12 2xl:w-7/12 rounded-xl shadow-md py-3 px-2 grid place-items-center text-purple hover:bg-purple hover:shadow-xl duration-200 ${feature.top ? 'lg:-translate-y-7' : ''} `}
                            key={index}>
                            {/* <i className="text-4xl"><feature.icon/></i> */}
                            <p className="mt-3">{feature.title}</p>
                            <p className="text-gray text-xs mt-6 mb-10">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features