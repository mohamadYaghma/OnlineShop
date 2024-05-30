import { useAuth } from '@/src/context/AuthContext'

import MainLayote from "./MainLayote";

const HomePage = () => {
  const {user} = useAuth();
  return ( 
    <MainLayote>
        <div className="container mx-auto lg:max-w-screen-xl">
            <h1 className="mt-10 text-2xl font-bold">
              سلام خوش آمدی {user?.name}
            </h1>
        </div>
    </MainLayote>
  );
}

export default HomePage;