import express from "express";
// import dotenv from "dotenv"
import Connection from "./Database/db.js";
import DefaultData from "./default.js";
import Routes from "./routes/route.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const port = 5000;

// dotenv.config();
// getting the db-user and password
// const USERNAME=process.env.DB_USERNAME;
// const PASSWORD=process.env.DB_PASSWORD;
Connection();
app.listen(port, () => {
  console.log("Server is running at port no.", port);
});
DefaultData();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);
