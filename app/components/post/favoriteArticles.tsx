import BlogCard from "Components/blog/BlogCard";

interface blogs{
    title:string,
    text:string,
    img:string,
    tags:Array<string>
}

const blogs: blogs[] = [
    {
        title: "مدیریت پروژه آنلاین در روینو",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگت",
        img: "https://s8.uupload.ir/files/project-managment_1_(1)_hyje.png",
        tags:['تسک']
    },
    {
        title: "مدیریت پروژه آنلاین در روینو",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگت",
        img: "https://s8.uupload.ir/files/project-managment_1_(1)_hyje.png",
        tags:['تسک']
    },
    {
        title: "مدیریت پروژه آنلاین در روینو",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگت",
        img: "https://s8.uupload.ir/files/project-managment_1_(1)_hyje.png",
        tags:['تسک']
    },
    {
        title: "مدیریت پروژه آنلاین در روینو",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگت",
        img: "https://s8.uupload.ir/files/project-managment_1_(1)_hyje.png",
        tags:['تسک']
    }
]

const FavoriteArticles = () => {
    return (
        <section className="grid grid-cols-1 overflow-hidden gap-6 m-6 md:grid-cols-3 xl:grid-cols-4" style={{height:"500px"}}>
            {blogs.map((data)=>(
                <BlogCard data={data} className="w-1/4 m-5"/>
            ))}
        </section>
    )
};

export default FavoriteArticles