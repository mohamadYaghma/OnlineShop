import React, { useState , Fragment }  from "react";
import SingleComment from "./singleComment";
import CommentForm from "./commentForm";
import ReplyComment from "./replyComment";

const PostComments = ({post}) => {
    return ( 
        <div>
            <h2 className="font-black text-2xl mb-8">نظرات</h2>
            {
                post.comments.map((comment , index )=>{
                    return(
                        !comment.responseTo && comment.status==2 && <React.Fragment key={comment._id}>
                            <SingleComment comment={comment} postId={post._id}/>
                            <ReplyComment comments={post.comments} parentCpmmentId={comment._id} postId={post._id}/>
                        </React.Fragment>
                    )
                })
            }
            {/* base comments form */}
            <div className="mt-8">
                <span className="font-bold md:text-lg">ارسال دیدگاه جدید</span>
                <CommentForm postId={post._id} responseTo={null}/>
            </div>
        </div>
     );
}
 
export default PostComments;
