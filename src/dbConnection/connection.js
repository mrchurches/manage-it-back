require("dotenv").config();
import mongoose from "mongoose";
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.9gyha2e.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const connection = () => {
    mongoose.set("strictQuery", false)
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log("Connection ok")
}

module.exports = connection
