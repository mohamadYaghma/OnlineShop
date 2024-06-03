import React, { useState , Fragment }  from "react";
import SingleComment from "./singleComment";

const ReplyComment = ({comments , parentCpmmentId , postId}) => {
    return ( 
        
            comments.map((comment) =>{
                return(
                    parentCpmmentId == comment.responseTo && (
                        <div className="mr-5">   
                            <React.Fragment key={comment._id}>
                                <SingleComment comment={comment} postId={postId}/>
                                <ReplyComment comments={comments} parentCpmmentId={comment._id} postId={postId}/>
                            </React.Fragment>
                        </div>
                    )
                )
            })
        
     );
}
 
export default ReplyComment;