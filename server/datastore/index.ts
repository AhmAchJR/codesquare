import { commentDao } from "./commentDao";
import { likeDao } from "./likeDao";
import { postDao } from "./postDao";
import { userDao } from "./userDao";

import { inMemoryDatastore } from "./memorydb";

export interface Datastore extends userDao , postDao , commentDao , likeDao{}

export const db = new inMemoryDatastore()