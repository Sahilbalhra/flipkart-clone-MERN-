import  express  from "express";
import  Connection from "./Database/db.js";
import DefaultData from "./default.js";
const app=express();
const port=5000;
//getting the db-user and password
// const USERNAME=process.env.DB_USERNAME;
// const PASSWORD=process.env.DB_PASSWORD;
Connection();
app.listen(port,()=>{
 console.log("Server is running at port no.",port);
})
DefaultData();