import { useAuth } from '@/src/context/AuthContext'

import MainLayote from "./MainLayote";

const HomePage = () => {
  const {user} = useAuth();
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