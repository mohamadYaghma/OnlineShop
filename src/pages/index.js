import MainLayote from "./MainLayote";
import { useSelector } from "react-redux";
// import { useAuth } from '@/src/context/AuthContext'

const HomePage = () => {
  // const {user} = useAuth(); befor use redux

  const userInfo = useSelector( state => state.userSignin );
  const {user} = userInfo;
  
  return ( 
    <MainLayote>
        <div className="container mx-auto lg:max-w-screen-xl">
            <h1 className="mt-10 text-2xl font-bold">
              {
                user ?<p> سلام خوش آمدی{user?.name}</p>  :
                <p>صفحه اصلی لطفا ثبت نام کنید</p>
              }
            </h1>
        </div>
    </MainLayote>
  );
}

export default HomePage;