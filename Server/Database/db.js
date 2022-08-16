import mongoose from "mongoose";

const Connection = () => {
  const db_link = `mongodb+srv://admin:DBhgy8ExGaDJg5S6@cluster0.wrtj3ta.mongodb.net/?retryWrites=true&w=majority`;

  mongoose
    .connect(db_link)
    .then(() => console.log("db connected"))
    .catch((err) => console.log(err));
};

export default Connection;
