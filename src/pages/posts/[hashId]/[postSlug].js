// import { toPersianDigits } from "@/utils/toPersianDigits";
import PostInteraction from "@/src/components/posts/PostInteraction";
import { BookmarkIcon, LinkIcon  } from "@heroicons/react/24/outline";
import { BookmarkIcon as SolideBookmarkIcon  } from "@heroicons/react/solid";
import { IoLogoLinkedin , IoLogoTwitter  } from 'react-icons/io';
import { FaTelegramPlane } from "react-icons/fa";
import axios from "axios";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import PostList from "@/src/components/posts/PostList";
import PostComments from "@/src/components/posts/postComments";
import toLocalDate from "../../utils/toLocalDate";


const PostPage = ({post}) => {
    // console.log(post);
    const[copied ,setCopied ]=useState(false);

    const copuHandler = ()=>{
        setCopied(true);
        setTimeout(()=>{
            setCopied(false)
        }, 1000);
    }

    return(
        <div className="bg-gray-50 min-h-screen">
            <div className="md:max-w-screen-lg container mx-auto">
            <header className="flex flex-col md:flex-row gap-y-5 md:justify-between md:items-start max-w-screen-md mb-12 mx-auto">
                {/* author data */}
                <div className="flex items-stretch">
                    <img className="w-14 h-14 md:w-20 md:h-20 rounded-full ring-2 ring-white " alt={post.author.name} src={post.coverImage}/>
                    <div className="flex flex-col mr-4 justify-between">
                        <div>{post.author.name}</div>
                        <span className="font-normal text-xs hidden md:block">{post.author.biography}</span>
                        <div className="font-normal text-myGray-400 text-sm">
                            <span>{toLocalDate(post.createdAt)}</span>
                            <span className="mx-1">&bull;</span>
                            <span>
                                <span>خواندن</span>
                                <span>{post.readingTime}</span>
                                <span>دقیقه</span>
                            </span>
                        </div>
                    </div>
                </div>
                {/* interaction buttons */}
                <div className="flex">
                    <button>
                        <LinkIcon className="h-6 w-6 hover:text-black text-gray-500 cursor-ointer" />
                    </button>
                    <button className="mr-4 border border-gray-300 text-gray-500 hover:text-gray-600 rounded-full px-3 py-1 flex items-center">
                        <span className="ml-1 text-xs">{post.isBookmarked ? "ذخیره" : "ذخیره شده" }</span>
                        {
                            post.isBookmarked ? (
                                <SolideBookmarkIcon className="w-6 h-6 fill-currnet"/>
                                
                            ):(
                                <BookmarkIcon className="w-6 h-6 stroke-currnet" />
                            )
                        }
                    </button>
                </div>
            </header>
            <main className="prose prose-xl prose-slate prose-h1:text-3xl prose-h1:font-black prose-h2:text-xl md:prose-p-text-lg md:prose-p-leading-10 prose-img:rounded-xl mb-8 max-w-screen-md mx-auto">
                <h1>{post.title}</h1>
                <h2>عنوان اول تستی</h2>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                <img src={post.coverImage} />
                <h2>عنوان تستی دوم</h2>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            </main>
            {/* post tags and like and bookmar */}
            <section className="border-b-2 border-black">
                {/* tag */}
                <ul className="flex items-center flex-wrap gap-x-4 mb-6">
                    {
                        ["فرانت اند","جاوا اسکریپت","نکست","اکسل","ریکت",].map((tag,index)=>{
                            return(
                                <li key={index} className="px-3 py-1 rounded-2xl bg-gray-200 hover:bg-gray-100 transition-all cursor-pointer text-gray-600 text-sm mb-3 block">
                                    {tag}
                                </li>
                            )
                        })
                    }
                </ul>
                {/* like , comment , bookmark */}
                <div className="flex items-center flex-col gap-y-8 md:flex-row md:justify-between">
                    <PostInteraction post={post} className="w-full justify-evenly md:w-auto"/>
                    {/* share btn  */}
                    <div className="flex items-center gap-x-6 justify-between w-full md:w-auto">
                        <div className="flex flex-center gap-x-6 md:gap-x-4 gap-x-3 w-full md:w-auto">
                            <a className="block"
                            href={`https://www.linkedin.com/sharing/share-offsite/$url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${post.hashId}/${post.Slug}`}
                            target="_blank"
                            rel="noreferrer"
                            >
                                <IoLogoLinkedin size={30} className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"/>
                            </a>
                            <a className="block"
                            href={`https://www.twitter.com/share?text=${post.title}&url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${post.hashId}/${post.Slug}`}
                            target="_blank"
                            rel="noreferrer"
                            >
                                <IoLogoTwitter size={30} className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"/>
                            </a>
                            <a className="block"
                            target="_blank"
                            rel="noreferrer"
                            href={`https://www.telegram.me/share/url?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${post.hashId}/${post.Slug}&text=${post.title}`}
                            >
                                <FaTelegramPlane size={30} className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"/>
                            </a>
                        </div>
                        <div className="relative">
                            <CopyToClipboard text={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${post.hashId}/${post.Slug}`}
                                onCopy={copuHandler}>
                                <div className="bg-gray-100 border px-3 py-1 rounded-2xl text-gray-600 flex items-center gap-x-2 cursor-pointer">
                                    <span>کپی&nbsp;لینک</span>
                                    <MdContentCopy size={24} />
                                </div>
                            </CopyToClipboard>
                            {
                                copied && <span className="absolute top-0 left-0 bg-blue-500 rounded-xl px-3 py-1 text-white">کپی شد</span>
                            }
                        </div>
                    </div>
                </div>
            </section>
            {/* post related */}
            <section className="mb-20">
                <h2 className="font-extrabold text-2xl md:text-3xl mb-8">پست های مشابه</h2>
                <div className="grid grid-cols-6 gap-8">
                    <PostList blogsData={post.related} />
                </div>
            </section>
            {/* postComments */}
            <PostComments post={post} />
            </div>
        </div>
    );
}
 
export default PostPage;

export async function getServerSideProps(ctx){
    const {query} = ctx ;
    const {data:{data}} =await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);
    console.log(data);
    return {
        props:{
            post: data ,
        }
    }

}