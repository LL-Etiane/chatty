const express = require('express')
const mongoose = require('mongoose')
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config')
const cors = require('cors')

const postRouter = require("./routes/postRoutes")
const accountRouter = require("./routes/accountRoute")

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors({}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.enable("trust proxy")

async function dbConnect(){
    await mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/chatty?authSource=admin`)
}

dbConnect().catch(err => console.log(err))

app.get('/api/v1',(req,res)=>{
    res.send("<h1>OKay</h1>")
})

app.use("/api/v1/",accountRouter)
app.use("/api/v1/posts", postRouter)

app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`)
})