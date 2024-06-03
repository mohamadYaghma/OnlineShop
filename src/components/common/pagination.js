import routerPush from '@/src/pages/utils/routerPush';
import Pagination from '@mui/material/Pagination';
import { useRouter } from "next/router";


const PaginationComponents = ({page,totalPages}) => {

    const router = useRouter();

    const pageHandler=(event , page) =>{
      router.query.page = page ;
      routerPush(router)
    }

    return (
        <div className="col-span-6 flex justify-center" dir="ltr">
             {
                totalPages > 1 &&(
                    <Pagination 
                count={totalPages} 
                page={page} 
                color="primary" 
                onChange={pageHandler}
            />
                )
             }
        </div> 
            );
}
 
export default PaginationComponents;