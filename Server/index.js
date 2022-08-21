import express from "express";
import { v4 as uuid } from "uuid";
import dotenv from "dotenv";
import Connection from "./Database/db.js";
import DefaultData from "./default.js";
import Routes from "./routes/route.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const port = 5000;

dotenv.config();
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

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams["MID"] = process.env.PAYTM_MID;
paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE;
paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID;
paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams["ORDER_ID"] = uuid();
paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID;
paytmParams["TXN_AMOUNT"] = "100";
paytmParams["CALLBACK_URL"] = "http://localhost:5000/callback";
paytmParams["EMAIL"] = "21585sahil@gmail.com";
paytmParams["MOBILE_NO"] = "7988791309";
