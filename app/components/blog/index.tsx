import Image from "next/image";
import FilterLogo from 'Icon/blog/filtersquare.png';
import BlogCard from "./BlogCard";
import TagsAndReads, { SearchInput } from "./ReadmoreFavarite";
// Start InterFace And App demo Data
interface readMores{
    title:string,
    text:string,
    url:string
}

interface favariteTag{
    text: string,
    url: string
}

interface blogs{
    title:string,
    text:string,
    img:string,
    tags:Array<string>
}

const readMores: readMores[] = [
    {
        title:"ساختار پروژه و مراحل مدیریت آن را بشناسید",
        text:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،......  ",
        url:"/"
    },
    {
        title:"ساختار پروژه و مراحل مدیریت آن را بشناسید",
        text:" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،...... ",
        url:"/"
    },
    {
        title:"ساختار پروژه و مراحل مدیریت آن را بشناسید",
        text:" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،...... ",
        url:"/"
    },
    {
        title:"ساختار پروژه و مراحل مدیریت آن را بشناسید",
        text:" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،...... ",
        url:"/"
    },
    {
        title:"ساختار پروژه و مراحل مدیریت آن را بشناسید",
        text:" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، ......",
        url:"/"
    }
]

const favariteTag:favariteTag[] = [
    {
        text:"مدیریت تسک",
        url :"/"
    },
    {
        text:"تسک",
        url :"/"
    },
    {
        text:"مدیریت تسک",
        url :"/"
    },
    {
        text:"تسک",
        url :"/"
    },
    {
        text:"مدیریت تسک",
        url :"/"
    },
]

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
    },
    {
        title: "مدیریت پروژه آنلاین در روینو",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگت",
        img: "https://s8.uupload.ir/files/project-managment_1_(1)_hyje.png",
        tags:['تسک']
    },
]
// End InterFace And App demo Data


// For Sorted Blogs 
const SortedBy = ()=>{
    return (
        <>
            <div className='w-full flex items-center hidden lg:flex mb-[33px]' dir='rtl' style={{columnGap:"39px"}}>
                <span style={{fontSize:"18px",fontWeight:"700"}}>مرتب سازی براساس</span>
                <a href='/' className='hover:bg-[#445AF7] hover:text-white rounded-xl transition-all' style={{marginRight:"4px",fontSize:"16px",fontWeight:"700",padding:"8px 16px"}}>جدید ترین</a>
                <a href='/' className='box-content bg-[#445AF7] text-white rounded-xl' style={{fontSize:"16px",fontWeight:"700",padding:"8px 16px"}}>پربازدید‌ترین‌ها</a>
                <a href='/' className='hover:bg-[#445AF7] hover:text-white rounded-xl transition-all' style={{fontSize:"16px",fontWeight:"700",padding:"8px 16px"}}>محبوب‌‌‌ترین‌ها</a>
                <a href='/' className='hover:bg-[#445AF7] hover:text-white rounded-xl transition-all' style={{fontSize:"16px",fontWeight:"700",padding:"8px 16px"}}>قدیمی‌ترین‌ها</a>
            </div>
            <div className="gap-x-[15px] gap-y-[10px] flex flex-wrap lg:hidden w-full md:mb-[49px] mb-[19px] justify-start">
                <div className="md:w-[176px] w-full items-center flex justify-between px-[15px] py-[8px] rounded-[10px] border-[#737A85] border-[1px]">
                    <span className="text-[12px] text-[#737A85] leading-[10px]">فیلتر زمانی (بروزترین)</span>
                    <Image src={FilterLogo} alt="filter"></Image>
                </div>
                <div className="md:w-[176px] w-full  items-center flex justify-between px-[15px] py-[8px] rounded-[10px] border-[#737A85] border-[1px]">
                    <span className="text-[12px] text-[#737A85] leading-[10px]">فیلتر نمایش (همه)</span>
                    <Image src={FilterLogo} alt="filter"></Image>
                </div>
            </div>
            <div className="w-full h-[0.5px] bg-[#737A85] mb-[27px] md:hidden block"></div>
        </>
    )
}

// This Function for Blog Card And show Blog data


// Wrap List For Show Blogs
const BlogContainer = ()=>{
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 w-full" style={{rowGap:"50px",columnGap:"14px"}}>
            {blogs.map((data,index)=>(
                <BlogCard data={data}/>
            ))}
        </div>
    )
}


// End Blog Container for Change Page
const PageIndex = ()=>{
    return (
        <div className='w-full items-center justify-center flex mt-[82px] mb-[71px] gap-x-[18px]' dir='rtl'>
            <img src='https://s8.uupload.ir/files/arrowsquareright-48px_ret5.png' className='cursor-pointer hover:ml-[5px] mr-[5px] hover:mr-[0px]  transition-all hover:drop-shadow-xl' width={"32"}/>
            <div className='flex gap-x-[10px] font-sans'>
              <div className='relative w-[38px] h-[38px] flex items-center justify-center cursor-pointer group'>
                <img className='w-full h-full absolute z-1 opacity-0 group-hover:opacity-100 transition-all' src='https://s8.uupload.ir/files/vector_v6dx.png'></img>
                <span className='text-black text-xl absolute z-1 group-hover:text-white transition-all'>1</span>
              </div>
              <div className='relative w-[38px] h-[38px] flex items-center justify-center cursor-pointer'>
                <img className='w-full h-full absolute z-0' src='https://s8.uupload.ir/files/vector_v6dx.png'></img>
                <span className='text-white absolute text-xl z-1'>2</span>
              </div>
              <div className='relative w-[38px] h-[38px] flex items-center justify-center cursor-pointer group'>
                <img className='w-full h-full absolute z-1 opacity-0 group-hover:opacity-100 transition-all' src='https://s8.uupload.ir/files/vector_v6dx.png'></img>
                <span className='text-black text-xl absolute z-1 group-hover:text-white transition-all'>3</span>
              </div>
            </div>
            <img src='https://s8.uupload.ir/files/arrowsquareright-48px_ret5.png' className='rotate-180 cursor-pointer hover:ml-[0px] ml-[5px] hover:mr-[5px] transition-all hover:drop-shadow-xl' width={"32"}/>
        </div>
    )
}

// Sorted And Blogs Function
const BlogList = ()=>{
    return (
        <div className='w-full overflow-auto'>
            <SortedBy/>
            <BlogContainer/>
            <PageIndex />
        </div>
    )
}

// Blog Component Body
const BlogBody = () => {
    return (
        <>
            <div className="flex flex-row overflow-hidden lg:gap-x-[40px] gap-x-[30px] p-[26px] lg:[40px]">
                {/* Read More And Best Tag */}
                <div className="md:flex hidden flex-col items-center gap-y-[40px]">
                    <SearchInput/>
                    <TagsAndReads favariteTag={favariteTag} readMores={readMores} />
                </div>
                
                {/* Blog Lists */}
                <BlogList/>
            </div>
        </>
    )
}

export default BlogBody