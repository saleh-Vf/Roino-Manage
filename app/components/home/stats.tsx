import Graph from 'Icon/home/stats/graph.png';
import Users from 'Icon/home/stats/users.png';
import Download from 'Icon/home/stats/download.png';
import Apple from 'Icon/home/stats/apple.png';
import Image from "next/image";

const Stats = () => {
    interface Stats {
        icon: string,
        title: string,
        count: number
    }

    const stats: Stats[] = [
        {
            icon: Graph,
            title: 'رضایت کاربر',
            count: 1000
        },
        {
            icon: Users,
            title: 'سازمان های همراه',
            count: 500
        },
        {
            icon: Download,
            title: 'دانلودها',
            count: 256
        },
        {
            icon: Apple,
            title: 'امتیاز در اپ استور',
            count: 4.5
        },
    ]

    return (
        <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 gap-y-14 bg-purple rounded-xl py-12 px-3 mx-3 my-16 lg:px-6 lg:mx-8 lg:my-20">
            {stats.map((stat, index) => (
                <div className="grid place-items-center" key={index}>
                    <Image src={stat.icon} alt={stat.title}/>
                    <p className="text-white text-lg font-black mt-2">{stat.title}</p>
                    <p className="text-white text-3xl font-black mt-5">+ {stat.count}</p>
                </div>
            ))}
        </div>
    )
}

export default Stats