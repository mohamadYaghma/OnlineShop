import routerPush from '@/src/pages/utils/routerPush';
import { AdjustmentsHorizontalIcon} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router';
import { useState } from 'react';

const sortOptions=[
  {label:" پر بازدیدترین " , id:"most"},
  {label:"محبوب ترین " , id:"popular"},
  {label:"جدید ترین " , id:"newest"},
]


const SortBar = () => {
  const router = useRouter();
  const [sort , setSort]=useState(router.query.sort || "newest");

  const sortHandler=(id)=>{
    setSort(id);
    router.query.sort = id ;
    routerPush(router);
  }
    return ( 
        <div className="bg-white rounded-3xl px-4 flex items-center">
          <div className="flex gap-x-2 items-center ml-4">
            <AdjustmentsHorizontalIcon className="h-6 w-6"/> 
            <span className="text-gray-700"> مرتب سازی :</span>
            
          </div>
              <ul className="flex gap-x-4 items-center">
                {
                  sortOptions.map(({id , label})=>{
                    return(
                      <li 
                      key={id}
                      onClick={()=>sortHandler(id)}
                      className={`cursor-pointer text-gray-700 relative py-4 px-3
                        ${id === sort  ? "text-purple-600 font-bold " : ""}
                      `}>{label}
                      {
                        id === sort && <span
                          className='h-[3px] bg-purple-600 w-9 rounded absolute right-0 bottom-0'
                        ></span>
                      }
                      </li>
                    )
                  })
                }
            </ul>
        </div>
     );
}
 
export default SortBar;