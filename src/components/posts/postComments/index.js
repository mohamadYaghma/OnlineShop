import React, { useState , Fragment }  from "react";
import SingleComment from "./singleComment";

const PostComments = ({post}) => {
    const [comment , setComment] = useState("");
    return ( 
        <div>
            <h2>نظرات</h2>
            {
                post.comments.map((comment , index )=>{
                    return(
                        !comment.responseTo && comment.status==2 && <React.Fragment key={comment._id}>
                            <SingleComment comment={comment}/>
                        </React.Fragment>
                    )
                })
            }
            {/* base comments form */}
            <form className="mt-8">
                <span className="font-bold md:text-lg">ارسال دیدگاه جدید</span>
                <textarea value={comment} placeholder="نظرت رو برام بنویس..." onChange={(e)=>setComment(e.target.value)}
                className="focus:ring-primary p-4 rounded my-4 w-full border-none ring-2 ring-slate-300 shadow-sm focus:outline-none focus:ring-2
                dark:focus-within:ring-blue-500"
                > </textarea>
                <button className="mt-4 mx-auto py-4 w-full sm:w-56 bg-violet-600 rounded-xl text-white px-3 md:text-lg">
                    ارسال نظر
                </button>
            </form>
        </div>
     );
}
 
export default PostComments;
