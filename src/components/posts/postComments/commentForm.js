import { useState } from "react";

const CommentForm = ({setComment , comment}) => {
    return ( 
        <form>
             <textarea 
                placeholder="نظرت رو برام بنویس..." 
                value={comment} 
                onChange={(e)=>setComment(e.target.value)}
                className="focus:ring-primary p-4 rounded my-4 w-full border-none ring-1 ring-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-700"
            ></textarea>
            <button 
                className="mt-4 mx-auto py-3 w-full sm:w-56 bg-violet-700 rounded-2xl text-white px-3 md:text-lg">
                ارسال نظر
            </button>
        </form>
     );
}
 
export default CommentForm;