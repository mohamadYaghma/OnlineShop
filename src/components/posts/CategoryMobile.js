import Link from "next/link"
import { useRouter } from "next/router";

const CategoryMobile = ({postCategory}) => {
  const {query} = useRouter();

    return ( 
        <div className="flex md:hidden gap-x-4 overflow-auto pb-5">
          <Link href={`/blogs`}>
              <a className={`block border border-gray-500 text-gray-400 bg-white rounded-3xl px-3 py-1 whitespace-nowrap text-sm ${!query.categorySlug ? "border-purple-700 text-purple-700 bg-purple-100 border-2" : ""}`}>همه مقالات</a>
          </Link>
        {
          
          postCategory.map((category)=>{
            return(
              <Link href={`/blogs/${category.englishTitle}`} key={category._id}>
              <a className={`block border border-gray-500 text-gray-400 bg-white rounded-3xl px-3 py-1 whitespace-nowrap text-sm ${query.categorySlug === category.englishTitle ? "border-purple-700 text-purple-700 bg-purple-100 border-2" : ""}`}>{category.title}</a>
            </Link>
            )
        
          })
        }
      </div>
     );
}
 
export default CategoryMobile;