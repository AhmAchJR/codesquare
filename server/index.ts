import express, { RequestHandler } from "express"
import {db} from "./datastore"

const app = express()
app.use(express.json())


const reqLoggerMidlleWare : RequestHandler = (req , res ,next)=>{
    console.log("Method is : "  , req.method , "Path is : " , req.path , " -Body is : " , req.body)
    next()
}

app.use(reqLoggerMidlleWare)

app.get("/posts" , (request , response)=>{
    response.send({ posts: db.listPosts()}) //key(name) : vlaue
}) 

app.post("/posts" , (req , res)=>{
    console.log("body : " , req.body)
    const post = req.body
    db.createPost(post)
    res.sendStatus(201)
})

app.listen(4000)