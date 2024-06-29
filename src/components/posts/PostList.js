import { ClockIcon } from "@heroicons/react/outline";
import Link from "next/link"
import PostInteraction from './PostInteraction';
import Image from "next/image";

const PostList = ({blogsData}) => {
    return ( blogsData.map((blog , index)=>{
      // console.log( blog.category);
              return(
                <div key={index} className="col-span-6 md:col-span-3 lg:col-span-2 bg-white  rounded-3xl  flex flex-col p-2 max-h-[330px]"> 
                  {/* cover image */}
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <Link href={`/posts/${blog.hashId}/${blog.slug}`} >
                      <a>
                      {/* <img src={blog.coverImage } className="w-full h-full object-center object-cover rounded-2xl" /> */}
                      <Image layout="responsive" src={blog.coverImage } width={500} height={300} className=" object-center object-cover rounded-2xl"/>
                      </a>
                    </Link>
                  </div>
                  {/* blog content */}
                  <div className="bg-gray-50 rounded-3xl p-2 flex flex-col w-full  justify-between flex-1">
                      <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
                        <a>
                         <h2 className="mb-4 font-bold">{ blog.title }</h2>
                        </a>
                      </Link>
                      {/* blog data */}
                      <div>
                        {/* اطلاعات نویسنده */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img src="/images/react.png" className="ml-2 w-6 h-6 rounded-full ring-2 ring-white" />
  
                        <span className="text-sm">محمد یغما</span>
                      </div>
                      {/* category */}
                     <Link href={`/blogs/${blog.category.englishTitle}` }>
                        <a>
                           <span className="text-xs px-2 py-1 rounded-xl bg-blue-100 text-blue-600 hover:text-blue-100 hover:bg-blue-600 transition-all duration-300 cursor-pointer">{blog.category.englishTitle}
                        </span>
                        </a>
                     </Link>
                    </div>
                    {/* ایکون ها */}
                    <div className="flex items-center justify-between">
                      <PostInteraction post={blog} isSmall/>
                        {/* زمان بلاگ */}
                      <div className="flex items-center text-[10px] text-gray-400 font-bold">
                        <ClockIcon className="w-4 h-4 stroke-gray-400 ml-1" />
                        <span className='ml-1'>زمان مطالعه :</span>
                        <span className='ml-1 leading-3'>{blog.readingTime}</span>
                        <span>دقیقه</span>
                      </div>
                    </div>
                      </div>
  
                  </div>
                </div>  
              ) 
            })
          
     );
}
 
export default PostList;