import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({path:'./env'});


connectDB()
.then(() => {

    app.on("Error", (error) =>{
        console.log(`Server error : ${error}`);
        throw error
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`\n Server is running at port : ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("Error while connecting to database!!", error)
})


/* 

//import mongoose from "mongoose";
//import { DB_NAME } from "./constants";
import express from "express";
const app = express();

( async () => {
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("Error", (error) =>{
            console.log("Error in connection : ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })

    }catch (error) {
        console.log("Error : ", error)
        throw error
    }
})

*/