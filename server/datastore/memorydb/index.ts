import { Datastore } from "../index";
import { User, Post, Comment, Like } from "../schema";

export class inMemoryDatastore implements Datastore {
    private users : User[] = []
    private posts : Post[] = []
    private likes : Like[] = []
    private comments : Comment[] = []


    createUser(user: User): void {
        this.users.push(user);
    }
    getUserByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email)
    }
    getUserByUsername(userName: string): User | undefined {
        return this.users.find(user => user.username === userName)
    }
    listPosts(): Post[] {
        return this.posts
    }
    createPost(post: Post): void {
        this.posts.push(post);
    }
    getPost(id: string): Post | undefined{
        return this.posts.find(post => post.id === id)
    }
    deletePost(id: string): Post  | undefined{
        const index = this.posts.findIndex(post => post.id === id)
        if (index === -1){
            return undefined
        }else{
            this.posts.splice(index , 1)
        }
    }
    createComment(comment: Comment): void {
        this.comments.push(comment)
    }
    listComments(postId: string): Comment[] {
        return this.comments.filter(comment => comment.postId === postId)
    }
    deleteComment(id: string): void {
        const index = this.comments.findIndex(comment => comment.id === id)
        if(index === -1){
            return
        }else{
            this.comments.splice(index , 1)
        }
    }
    createLike(like: Like): void {
        this.likes.push(like)
    }
    
}