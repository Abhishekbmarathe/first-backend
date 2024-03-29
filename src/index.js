// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})


connectDB()
.then(()=>{
    app.listern(process.env.PORT || 8000,()=>{
        console.log("server is running at port  : ${process.env.PORT")
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed !!!",err)
})




























/* import { Express } from "express";
const app = express()

    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.error("ERROE: ", error)
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port ${process.env.PORT}`)
            })
        } catch (error) {
            console.error("ERROR: ", error)
            throw err
        }
    })() */