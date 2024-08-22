import Link from 'next/link';
const BlogCard = (props)=>{
    return (
        <div className="relative items-center justify-center flex rtl w-full" dir="rtl" style={{height:"480px",boxShadow:"0px 16px 40px -5px rgba(112, 144, 176, 0.2);",borderRadius:"20px"}}>
            <div className="bg-white" style={{borderRadius:"20px",position:"absolute",zIndex:"0",marginTop:"33px",width:"100%",height:"447px"}}></div>
            <div className="mx-auto grid grid-cols-1" style={{alignItems:"end",position:"absolute",zIndex:"1",width:"90%",height:"100%"}}>
                <img src={props.data.img} className="w-full object-cover" style={{borderRadius:"25px",height:"214px"}} />
                <div className="flex w-100" style={{marginTop:"11px",}}>
                    {props.data.tags.map((text,index)=>(
                        <a className="w-fit h-fit cursor-pointer" style={{backgroundColor:"rgba(71, 102, 249, 0.2)",borderRadius:"20px",padding:"3px 8px",marginLeft:"10px",fontSize:"12px"}}># {text}</a>
                    ))}
                    
                </div>
                <span className="text-[16px] lg:text-[20px]" style={{fontWeight:"bold"}}>{props.data.title}</span>
                <p style={{color:"rgba(128, 128, 128, 0.6)",fontSize:"16px",marginTop:"13px",marginBottom:"0px"}}>{props.data.text}</p>
                <div className="h-100"></div>
                <div className="w-full justify-center flex">
                    <Link href={`/blog/post/`} className="text-white cursor-pointer" style={{padding:"8px 36px",backgroundColor:"rgba(68, 90, 247, 1)",borderRadius:"12px",color:"white !important",marginBottom:"24.71px",}}>بیشتر بخوانید</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;