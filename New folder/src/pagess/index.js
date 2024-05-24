'use client'
import "./../../styles/Home.module.css"
import { AdjustmentsHorizontalIcon , ChevronDownIcon  , BookmarkIcon , HeartIcon , ChatBubbleBottomCenterTextIcon , ClockIcon} from '@heroicons/react/24/outline'
import { Axios } from "axios";
import Link from "next/link"
import { useState } from "react";

export default function Home({blogsdata}) {
  console.log(blogsdata);
  const [isOpen , setIsOpen] =useState (false) ;
  return (
  <div className="bg-gray-50">
     <div className="container mx-auto lg:max-w-screen-xl"> 
     <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[55px_minmax(300px,_1fr)] text-black min-h-screen " >
      <div className='hidden md:block md:col-span-3 md:row-span-2 '> 
        <div className="bg-white rounded-3xl overflow-hidden">
          {/* accrdion headr */}
          <div className="flex item-center justify-between px-4 py-4 cursor-pointer bg-purple-400"
          
            onClick={ ()=>setIsOpen(!isOpen) }
          >
            <span>دسته بندی محصولات</span>
            <ChevronDownIcon className = {` w-6 h-6 stroke-black-400 transition-all duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`} />
            
          </div>
        {/* accrdion content */}
          <div className = {` ${ isOpen ? 'hidden' : ' block' } `} >
            <Link className="block hover:bg-purple-50 py-2 mb-1 pr-4" href={"#"}>همه مقالات </Link>
            <Link className="block hover:bg-purple-50 py-2 mb-1 pr-4" href={"#"}> ری اکت </Link>
            <Link className="block hover:bg-purple-50 py-2 mb-1 pr-4" href={"#"}> جاوا اسکریپت </Link>
            <Link className="block hover:bg-purple-50 py-2 pr-4 " href={"#"}> نکست </Link>
          </div>
        </div>
      </div>
      {/* sidebar */}
      <div className="hidden md:block md:col-span-9 ">
        <div className="bg-white rounded-3xl px-4 flex items-center">
          <div className="flex gap-x-2 items-center ml-4">
            <AdjustmentsHorizontalIcon className="h-6 w-6"/> 
            <span className="text-gray-700"> مرتب سازی :</span>
            
          </div>
              <ul className="flex gap-x-4 items-center">
              <li className="py-3 text-gray-700 cursor-pointer"> پر بازدیدترین </li>
              <li className="py-3 text-gray-700 cursor-pointer"> محبوب ترین </li>
              <li className="py-3 text-gray-700 cursor-pointer"> جدید ترین </li>
            </ul>
        </div>
      </div>
      {/* blog */}
      <div className="md:col-span-9 grid grid-cols-6 gap-8">
        {
          ["js.png" , "Next.png" , "nuxJs.png" , "react.png" , "nuxJs.png" , "js.png"].map((item , index)=>{
            return(
              <div key={index} className="sm:col-span-6 md:col-span-3 p-2 lg:col-span-2 bg-white  rounded-3xl  flex flex-col"> 
                {/* cover image */}
                <div className="aspect-w-16 aspect-h-9">
                  <img src={`/images/${item}` }  class="w-full h-full object-center object-cover lg:w-full lg:h-full rounded-3xl" />
                </div>
                {/* blog content */}
                <div className="bg-gray-50 rounded-3xl p-2 bg-gray-200 flex flex-col w-full flex-1 justify-between">
                    <h2 className="mb-4 font-bold">برسی  ری اکت</h2>
                    {/* اطلاعات نویسنده */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img src="/images/react.png" className="ml-2 w-6 h-6 rounded-full ring-2 ring-white" />

                      <span className="text-sm">محمد یغما</span>
                    </div>
                    <div>
                      <span className="text-xs px-2 py-1 rounded-xl bg-blue-100 text-blue-600 hover:text-blue-100 hover:bg-blue-600 transition-all duration-300 cursor-pointer">ری اکت</span>
                    </div>
                  </div>
                  {/* ایکون ها */}
                  <div className="flex items-center justify-between p-2 ">
                    <div className="flex items-center ">
                    <BookmarkIcon className="w-4 h-4 rounded-xl bg-green-300 stroke-green-900  hover: hover:bg-green-600 transition-all duration-300 cursor-pointer ml-2" />
                    <HeartIcon className="w-4 h-4 rounded-xl bg-red-300 stroke-red-900  hover: hover:bg-red-600 transition-all duration-300 cursor-pointer ml-2"/>
                    <ChatBubbleBottomCenterTextIcon className="w-4 h-4 rounded-xl bg-gray-300 stroke-gray-900  hover: hover:bg-gray-600 transition-all duration-300 cursor-pointer ml-2"/>
                    </div>
                      {/* زمان بلاگ */}
                    <div className="flex items-center justify-center px-2 py-1 rounded-xl bg-gray-100 text-gray-600">
                      <div>
                        <ClockIcon className="w-3 h-3 ml-2" />
                      </div>
                      <div>
                      <span className="text-xs">زمان مطالعه : 12 دقیقه </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>  
            ) 
          })
        }
      </div>
    </div>
   </div>
  </div>
  )
}


export async function getServerSideProps(context){
  const {data} = await Axios.get("http://localhost:5000/api/posts") ;
  return {
    props : {
      blogsdata : data ,
    },
  }
}