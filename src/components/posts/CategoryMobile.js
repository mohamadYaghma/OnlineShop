import Link from "next/link"

const CategoryMobile = ({postCategory}) => {
    return ( 
        <div className="flex md:hidden gap-x-4 overflow-auto pb-5">
        {
          postCategory.map((category)=>{
            return(
              <Link href={`/blogs/${category.englishTitle}`} key={category._id}>
              <a className="block border border-gray-500 text-gray-400 bg-white rounded-3xl px-3 py-1 whitespace-nowrap text-sm">{category.title}</a>
            </Link>
            )
        
          })
        }
      </div>
     );
}
 
export default CategoryMobile;