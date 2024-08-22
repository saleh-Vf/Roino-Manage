import Link from "next/link"
import SearchIcon from "Icon/blog/search.png";
import Image from "next/image";
const ReadMoreItem = (props)=>{
    return (
        <div className='w-full flex flex-col cursor-pointer' style={{borderRadius:"4px",padding:"9px 8px",backgroundColor:"#F5F7FB"}}>
            <span className="text-[12px] lg:text-[16px]" style={{fontWeight:"500"}}>{props.data.title}</span>
            <span className="text-[12px] lg:text-[16px]" style={{color:"rgba(128, 128, 128, 0.6)",}}>
           {props.data.text}
            </span>
        </div>
    )
}

const Tag = (props) => {
    return (
        <Link className="drop-shadow" href='/' style={{backgroundColor:"rgba(71, 102, 249, 0.2)",borderRadius:"20px",padding:"5px 8px",width:"fit-content",fontSize:"14px",fontWeight:"400"}}># {props.data.text}</Link>
    )
}

export const SearchInput = ()=>{
    return (
    <div className="w-full px-[16px] py-[13px] mt-[-6px] rounded-[12px] border border-[#AEBBCF] bg-white flex flex-row items-center">
        <input className="outline-none w-full mt-[5px]" placeholder="جست و جو کنید ..."></input>
        <Image src={SearchIcon} alt="search" />
    </div>
    )
}

// Read Morw Container
const ReadMore = ( props ) => {
    return (
        <div className="w-full flex-col flex drop-shadow-md" style={{marginTop:"50px",padding:"28px 18px",backgroundColor:"white",borderRadius:"20px",border:"0.5px rgba(174, 187, 207, 1) solid",}}>
            <span style={{fontSize:"20px",fontWeight:"bold",marginBottom:"40px"}}>بیشتر بخوانید</span>
            <div className="flex flex-col w-full" style={{justifyContent:"end",rowGap:"20px"}}>
              {props.readMores.map((data,index)=>(
                <ReadMoreItem data={data}/>
              ))}
            </div>
        </div>
    )
}

// Favarite Tag Container
const FavariteTags = (props) => {
    return (
        <>
            <div className="w-full flex-col flex lg:h-[447px] h-[267px] drop-shadow-md" style={{padding:"28px 20px 28px 10px",backgroundColor:"white",borderRadius:"20px",border:"0.5px rgba(174, 187, 207, 1) solid",}}>
                <span style={{fontSize:"20px",fontWeight:"bold",marginBottom:"13px"}}>محبوب ترین تگ ها</span>
                {/* List Tag */}
                <div className="flex flex-wrap w-full" style={{rowGap:"13px",columnGap:"8.19px",paddingRight:"8px"}}>
                    {props.favariteTag.map((data,index)=>(
                        <Tag data={data} />
                    ))}
                </div>
            </div>
        </>
    )
}

// Right page Element
const TagsAndReads = (props) => {
    console.log(props.readMore);
    return (
        <div className="lg:flex md:w-[246px] md:flex flex-col p-0 w-80 hidden min-w-[264px] lg:min-w-[320px]" dir="rtl">
            <FavariteTags favariteTag={props.favariteTag} />
            <ReadMore readMores={props.readMores} />
        </div>
    )
}

export default TagsAndReads;