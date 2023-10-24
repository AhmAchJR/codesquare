import {Like} from "./schema"

export interface likeDao {
    createLike(like : Like) : void
}