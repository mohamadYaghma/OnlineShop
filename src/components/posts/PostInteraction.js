import { BookmarkIcon , HeartIcon , ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'
import {  HeartIcon as SolidHeartIcon  , BookmarkIcon as SolidBookmarkIcon} from '@heroicons/react/24/solid'

const PostInteraction = ({post , isSmall , className}) => {
    const iconSize = `${isSmall ? "h-4 w-4 " : "h-6 w-6"}`
    return (
        <div className={`flex items-center ${isSmall ? "gap-x-2" : "gap-x-8"} ${className}`} >
                        <button className='bg-gray-100 p-0.5 text-gray-500 rounded flex items-center gap-x-1
                         hover:bg-gray-500 hover:text-gray-100 transition-all duration-300 cursor-pointer
                        '>
                          <ChatBubbleBottomCenterTextIcon className={`${iconSize} stroke-current   ml-2`}/>
                          <span className='text-xs text-current font-bold leading-3'>{post.commentsCount}</span>
                        </button>
                        <button className='bg-red-100 p-0.5 rounded flex items-center gap-x-1 text-red-500 hover:bg-red-500 hover:text-red-100 transition-all '>
                          {
                            post.isLiked ? (
                            <SolidHeartIcon className={`${iconSize} fill-current`}/>
                            ):(
                            <HeartIcon className={`${iconSize} stroke-current`}/>
                            )
                          }
                          <span className='block text-xs text-current font-bold leading-3'>{post.likesCount}</span>
                        </button>
                        <button className='bg-blue-100 text-blue-500 p-0.5 rounded flex items-center gap-x-1 
                        hover:bg-blue-500 hover:text-white transition-all
                        '>
                          {
                            post.isBookmarked ? (
                                <SolidBookmarkIcon className={`${iconSize} fill-current`}/>
                              ) : (
                                <BookmarkIcon className={`${iconSize} stroke-current`} />)
                          }
                        </button>
                      </div>
      );
}
 
export default PostInteraction;