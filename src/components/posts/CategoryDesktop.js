import { ChevronDownIcon} from '@heroicons/react/outline'
import Link from "next/link"
import { useRouter } from 'next/router';
import { useState } from "react";

const CategoryDesktop = ({postCategory}) => {
    const [isOpen , setIsOpen] =useState (true) ;
    const {query} = useRouter();

    return ( 
        <div className="bg-white rounded-3xl overflow-hidden sticky top-24">
          {/* accrdion headr */}
          <div className="flex item-center justify-between px-4 py-4 cursor-pointer bg-purple-400"
          
            onClick={ ()=>setIsOpen(!isOpen) }
          >
            <span>دسته بندی محصولات</span>
            <ChevronDownIcon className = {` w-6 h-6 stroke-black-400 transition-all duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`} />
            
          </div>
        {/* accrdion content */}
          <div className = {` ${ isOpen ? 'block' : ' hidden' } `} >
            <Link href="/blogs" >
              <a className={`block py-2  pr-4 hover:bg-purple-50  mb-1 ${!query.categorySlug ? "bg-purple-700 text-white hover:bg-purple-600" : ""}`}>همه مقالات</a>
            </Link>
        {
          postCategory.map((category)=>{
            return(
              <Link  href={`/blogs/${category.englishTitle}`} key={category._id}>
                <a className={`block py-2  pr-4 hover:bg-purple-50 mb-1 ${query.categorySlug === category.englishTitle ? "bg-purple-700 text-white hover:bg-purple-600" : "" }`}>{category.title}</a>
              </Link>             
            )
          })
        }
          
            </div>
        </div>
     );
}
 
export default CategoryDesktop;