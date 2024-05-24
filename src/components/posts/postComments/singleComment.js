import toLocalDate from "@/src/pages/utils/toLocalDate";
import { UserIcon } from "@heroicons/react/24/outline";

const SingleComment = ({comment}) => {
    return ( 
        <div className="border border-gray-500 rounded p-2 md:p-4">
            <div className="flex gap-x-4">
                <UserIcon className="w-10 h-10"/>
                <div className="flex flex-col justify-between">
                <span>{comment.writer?.name}</span>
                <span>{toLocalDate(comment.createdAt)}</span>
            </div>
            </div>
            <div>{comment.content}</div>
        </div> 
    );
}
 
export default SingleComment;