// 'use client'
import "@/styles/Home.module.css"
import  axios  from "axios";
import PostList from "@/components/posts/PostList";
import CategoryMobile from "@/components/posts/CategoryMobile";
import SortBar from "@/components/posts/SortBar";
import CategoryDesktop from "@/components/posts/CategoryDesktop";
import queryString from "query-string";
import MainLayote from "../MainLayote";
import http from "@/src/sevices/httpServices";
import PaginationComponents from "@/src/components/common/pagination";


export default function CategoryPage({blogsData , postCategory}) {
  return (
  <MainLayote>
    <div className="bg-gray-50 pt-5">
     <div className="container mx-auto lg:max-w-screen-xl px-4"> 
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
        <PaginationComponents page={blogsData.page} totalPages={blogsData.totalPages}/>

      </div>
    </div>
   </div>
  </div>
  </MainLayote>
  )
}


export async function getServerSideProps(context){

  const {query , req} = context;  
// console.log(queryString.stringify(query));
 
  const {data : result} = await http.get(`/posts?${queryString.stringify(query)}`, {
    headers:{
      Cookie : req.headers.Cookie || "",
    }}) ;

  const {data : postCategory} = await http.get("/post-category") ;

  const {data} = result ;
  return {
    props : {
      blogsData : data ,
      postCategory : postCategory.data ,
    },
  }
}