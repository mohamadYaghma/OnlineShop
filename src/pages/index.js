import Link from 'next/link'
const HomePage = () => {
  return ( 
    <div>
      <Link href="/blogs">
        <a>Go To Blogs Page</a>
      </Link>
    </div>
   );
}
 
export default HomePage;