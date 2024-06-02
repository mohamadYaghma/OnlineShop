import routerPush from '@/src/pages/utils/routerPush';
import http from '@/src/sevices/httpServices'
import { BookmarkIcon , HeartIcon , ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'
import {  HeartIcon as SolidHearIcon  , BookmarkIcon as SolidBookmarkIcon} from '@heroicons/react/24/solid'
import { data } from 'autoprefixer';


import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

const PostInteraction = ({post , isSmall , className}) => {
    const iconSize = isSmall ? "h-4 w-4 " : "h-6 w-6" ;
    const numberSize = isSmall ? "text-xs" : "text-base";
    const router = useRouter();
    
    const likehandler=(postId)=>{
      http.put(`/posts/like/${postId}`)
      .then(({data})=>{
          routerPush(router);
          toast.success(data.message)
       })
      .catch((err)=>{
        toast.error(err?.response?.data.message)
      })
    }

    const bookmarkhandler=(postId)=>{
      http.put(`/posts/bookmark/${postId}`)
      .then(({data})=>{
        routerPush(router);
        toast.success(data.message)
       })
      .catch((err)=>{
        toast.error(err?.response?.data.message)
      })
    }

    return (
        <div className={`flex items-center ${isSmall ? "gap-x-2" : "gap-x-4"} ${className}`} >
                        <button 
                          className='bg-gray-100 p-0.5 text-gray-500 rounded flex items-center gap-x-1
                         hover:bg-gray-500 hover:text-gray-100 transition-all duration-300 cursor-pointer
                        '>
                          <ChatBubbleBottomCenterTextIcon className={`${iconSize} stroke-current   ml-2`}/>
                          <span className={`${numberSize} block font-bold leading-3`}>{post.commentsCount}</span>
                        </button>
                        <button 
                        onClick={()=>likehandler(post._id)}
                          className='bg-red-100 p-0.5 rounded flex items-center gap-x-1 text-red-500 hover:bg-red-500 hover:text-red-100 transition-all '>
                          {
                            post.isLiked ? 
                            (<SolidHearIcon className={`${iconSize} fill-current`}/>)
                            :(<HeartIcon className={`${iconSize} stroke-current`}/>)
                          }
                          <span 
                            className={`${numberSize} block text-xs text-current font-bold leading-3`}>{post.likesCount}</span>
                        </button>
                        <button 
                          onClick={()=> bookmarkhandler(post._id)}
                          className='bg-blue-100 text-blue-500 p-0.5 rounded flex items-center gap-x-1 
                        hover:bg-blue-500 hover:text-white transition-all
                        '>
                          {
                            post.isBookmarked ? (
                              <SolidBookmarkIcon className={`${iconSize} fill-current`}/>
                              ) : (
                                <BookmarkIcon className={`${iconSize} stroke-current`} />
                               )
                          }
                        </button>
                      </div>
      );
}
 
export default PostInteraction;