import Image from "next/image";
import Link from "next/link";
import RoinoLogo from 'Image/header/roino.png';
import Github from 'Icon/footer/Github.png';
import Twitter from 'Icon/footer/Twitter.png';
import Instagram from 'Icon/footer/Instagram.png';

const Footer = () => {
    interface useFulLinks {
        title: string,
        url: string
    }

    interface socialNetworks {
        url: string,
        icon: string
    }

    const useFulLinks: useFulLinks[] = [
        {
            title: 'شرایط و قوانین استفاده',
            url: '/'
        },
        {
            title: 'سوالات متداول',
            url: '/'
        },
        {
            title: 'فرصت های شغلی',
            url: '/'
        },
    ]

    const socialNetworks: socialNetworks[] = [
        {
            url: '/',
            icon: Github
        },
        {
            url: '/',
            icon: Twitter
        },
        {
            url: '/',
            icon: Instagram
        }
    ]

    return (
        <>
            {/* footer */}
            <div className="bg-blue-chalk grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 px-5 lg:px-7 gap-12">
                <div>
                    <Image src={RoinoLogo} alt="روینو" className="w-20 h-auto"/>
                    <p className="text-gray mt-4">Lهمراهی با شما، افتخار ماست. همراهی با شما افتخار ماست. همراهی با شما افتخار ماست ماست.همراهی با شما  افتخار
ماست.</p>
                </div>

                <div>
                    <p className="text-primary text-lg font-bold">لینک های مفید</p>
                    <div className="pt-2 text-gray">
                        {useFulLinks.map((link, index) => (
                            <Link href={link.url} key={index} className="block py-1.5">{link.title}</Link>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="text-primary text-lg font-bold">دانلود اپلیکیشن</p>
                    <div className="pt-2">
                        <p className="text-gray mb-5">شما همواره میتوانید از اپلیکیشن روینو را از لینک زیر دانلود
                            کنید</p>
                        <Link href='/'
                              className="py-2.5 px-5 text-primary font-bold border border-primary bg-transparent rounded-lg">دانلود
                            مستقیم</Link>
                    </div>
                </div>

                <div>
                    <p className="text-primary text-lg font-bold">ما را‌ ‌در شبکه اجتماعی دنبال کنید</p>
                    <div className="pt-2 flex items-center gap-3">
                        {socialNetworks.map((social_network, index) => (
                            <Link href={social_network.url} key={index}>
                                <Image src={social_network.icon} alt='' className="w-10"/>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            {/* copy right */}
            <div className="bg-soapstone flex justify-center items-center text-gray gap-2 py-3">

                <p>کلیه حقوق برای روینو محفوظ است</p>
            </div>
        </>
    )
}

export default Footer