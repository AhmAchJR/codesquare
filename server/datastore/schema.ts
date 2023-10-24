export interface User {
    id : string , 
    firstname : string , 
    lastname : string ,
    email : string ,
    username: string ,
    password : string 
}

export interface Post {
    id : string ,
    title : string , 
    url : string ,
    userid : string , 
    postedAt : number 
}

export interface Like {
    userId : string , 
    postId : string 
}

export interface Comment {
    id : string , 
    userId : string , 
    postId : string , 
    comment : string ,
    postedAt : number
}

