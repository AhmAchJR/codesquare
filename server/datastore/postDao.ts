import { Post } from "./schema";


export interface postDao { 
    listPosts() : Post[] ,
    createPost(post : Post) : void ,
    getPost(id : string) : Post | undefined, 
    deletePost(id : string) : Post | undefined

}

