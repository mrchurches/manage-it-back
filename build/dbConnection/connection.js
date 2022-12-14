"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const mongoose_1 = __importDefault(require("mongoose"));
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.9gyha2e.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
const connection = () => {
    mongoose_1.default.set("strictQuery", false);
    mongoose_1.default.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connection ok");
};
module.exports = connection;
