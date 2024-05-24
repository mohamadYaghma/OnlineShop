import React, { useState , Fragment }  from "react";
import SingleComment from "./singleComment";

const ReplyComment = ({comments , parentCpmmentId}) => {
    return ( 
        
            comments.map((comment) =>{
                return(
                    parentCpmmentId == comment.responseTo && (
                        <div className="mr-5">   
                            <React.Fragment key={comment._id}>
                                <SingleComment comment={comment}/>
                                <ReplyComment comments={comments} parentCpmmentId={comment._id}/>
                            </React.Fragment>
                        </div>
                    )
                )
            })
        
     );
}
 
export default ReplyComment;