import Link from 'next/link'

const NaveBase = () => {
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
                <li className='hover:text-gray-300 '>پروفایل</li>
                <li className='hover:text-gray-300 '> 
                  <Link className='block' href={'/signUp/'}>ثبت نام</Link>
                </li>
                <li className='hover:text-gray-300 '>
                  <Link href={'/logIn/'}>ورود</Link>
                </li>    
            </ul>
          </nav>
        </div>
        
      
    </header>
     );
}
 
export default NaveBase;