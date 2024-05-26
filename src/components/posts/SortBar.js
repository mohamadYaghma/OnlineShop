import { AdjustmentsHorizontalIcon} from '@heroicons/react/24/outline'
import Link from 'next/link';


const SortBar = () => {
    return ( 
        <div className="bg-white rounded-3xl px-4 flex items-center justify-between">
          <div className="flex gap-x-2 items-center ml-4">
            <AdjustmentsHorizontalIcon className="h-6 w-6"/> 
            <span className="text-gray-700"> مرتب سازی :</span>
            
          </div>
              <ul className="flex gap-x-4 items-center">
              <li className="py-3 text-gray-700 cursor-pointer"> پر بازدیدترین </li>
              <li className="py-3 text-gray-700 cursor-pointer"> محبوب ترین </li>
              <li className="py-3 text-gray-700 cursor-pointer"> جدید ترین </li>
            </ul>
            <Link className='block' href={'/signUp/'}>ثبت نام</Link>
        </div>
     );
}
 
export default SortBar;