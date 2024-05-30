import { useAuth, useAuthAction } from '@/src/context/AuthContext'
import Link from 'next/link'

const NaveBase = () => {
  const {user} = useAuth();
  const dispatch = useAuthAction();
    return ( 
      <header className='shadow-black-100 py-2  bg-white text-sm md:text-xl'>
        <div className='container mx-auto xl:max-w-screen-xl'> 
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
                      className='bg-red-600 px-2 py-1 rounded text-red-100 cursor-pointer'
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