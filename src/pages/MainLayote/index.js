import Footer from "@/src/components/layoute/fotter";
import NaveBase from "@/src/components/layoute/navBase";

const MainLayote = ({children}) => {
    return ( 
        <div className="w-full">
            <NaveBase />
                {children}
            <Footer />
        </div>
     );
}
 
export default MainLayote;