import {Comment} from "./schema"

export interface commentDao {
    createComment(comment : Comment) : void ,
    listComments(postId : string ) : Comment[] , 
    deleteComment(id : string) : void
}