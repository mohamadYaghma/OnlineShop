import routerPush from "@/src/pages/utils/routerPush";
import http from "@/src/sevices/httpServices";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";

const CommentForm = ({postId ,responseTo ,setOnReply }) => {
    const router = useRouter();
    const [commentValue , setCommentValue] = useState("");
    const submitHandler =(e)=>{
        e.preventDefault()
        const data = {
            content : commentValue ,
            postId ,
            responseTo,
        }
        http.post('/post-comment/save-comment' , data)
        .then((res) => {
            setCommentValue("")
            if(setOnReply) setOnReply((open)=>!setOnReply)
            toast.success(res.data.message)
            routerPush(router)
        })
        .catch(err => toast.error(err?.response?.data?.message))
    }
    return ( 
        <form>
             <textarea 
                placeholder="نظرت رو برام بنویس..." 
                value={commentValue} 
                onChange={(e)=>setCommentValue(e.target.value)}
                className="focus:ring-primary p-4 rounded my-4 w-full border-none ring-1 ring-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-700"
            ></textarea>
            <button 
                onClick={submitHandler}
                className="mt-4 mx-auto py-3 w-full sm:w-56 bg-violet-700 rounded-2xl text-white px-3 md:text-lg">
                ارسال نظر
            </button>
        </form>
     );
}
 
export default CommentForm;