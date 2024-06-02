import { useAuth, useAuthAction } from '@/src/context/AuthContext'
import Link from 'next/link'

const NaveBase = () => {
  const {user , loading} = useAuth();
  const dispatch = useAuthAction();
    return ( 
      <header className='shadow-md py-2 bg-white text-sm md:text-xl sticky top-0 z-40'>
        <div className={`container mx-auto xl:max-w-screen-xl px-4 md:px-0 transition-all ${loading ? "opacity-0" : "opacity-100"}`}> 
          <nav className='flex justify-between'>
            <ul className='flex justify-center items-center gap-x-5 '>
                <li className='hover:text-gray-300 '>
                  <Link href={'/'} >خانه</Link>
                </li>
                <li className='hover:text-gray-300 '> 
                  <Link href="/blogs">
                    <a>بلاگ ها</a>
                  </Link> 
                </li>
            </ul>
            <ul className='flex justify-center items-center gap-x-5'>
                {
                  user ? 
                  <>
                    <li className='hover:text-gray-300 text-sm'>پروفایل - {user.name}</li>
                    <button
                      onClick={()=>dispatch({type:"SIGNOUTE"})}
                      className='bg-red-600 px-1  py-1 rounded text-red-100 cursor-pointer text-sm'
                    >خروج</button>
                  </>
                  :
                   <>
                    <li className='hover:text-gray-300 '> 
                      <Link href={'/signup'}>ثبت نام</Link>
                    </li>
                    <li className='hover:text-gray-300 '>
                      <Link href={'/signin'}>ورود</Link>
                    </li> 
                  </>
                }
                  
            </ul>
          </nav>
        </div>
        
      
    </header>
     );
}
 
export default NaveBase;