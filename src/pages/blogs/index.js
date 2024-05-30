// 'use client'
import "@/styles/Home.module.css"
import  axios  from "axios";
import PostList from "@/components/posts/PostList";
import CategoryMobile from "@/components/posts/CategoryMobile";
import SortBar from "@/components/posts/SortBar";
import CategoryDesktop from "@/components/posts/CategoryDesktop";
import MainLayote from "../MainLayote";
import Head from "next/head";
import http from "@/src/sevices/httpServices";


export default function BlogsPage({blogsData , postCategory}) {
  console.log(postCategory.englishTitle);
  return (
  <MainLayote>
    <Head>
      <title>جواهری ویرگول -  محصولات</title>
    </Head>
          <div className="bg-gray-50">

      <div className="container mx-auto lg:max-w-screen-xl px-4 pt-5 pb-20"> 
      <CategoryMobile postCategory={postCategory} />
      <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] text-black min-h-screen " >
      {/* catgory desktop */}
      <div className='hidden md:block md:col-span-3 md:row-span-2 '> 
        <CategoryDesktop postCategory={postCategory}/>
      </div>
      {/* category mobile */}
      {/* SortBar */}
      <div className="hidden md:block md:col-span-9 ">
        <SortBar />
      </div>
      {/* blogs section */}
      <div className="md:col-span-9 grid grid-cols-6 gap-8">
        <PostList blogsData={blogsData.docs} />
      </div>
      </div>
      </div>

      </div>
  </MainLayote>
  )
}


export async function getServerSideProps({req}){
  const {data : result} = await http.get("/posts?limit=6&page=1" , {
    withCredentials :true , 
    headers:{
      Cookie : req.headers.Cookie || "",
    }
  }) ;
  const {data : postCategory} = await http.get("/post-category") ;
  const {data} = result ;
  return {
    props : {
      blogsData : data ,
      postCategory : postCategory.data ,
    },
  }
}