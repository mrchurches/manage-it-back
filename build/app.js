"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan = require('morgan');
let server = (0, express_1.default)();
const routes = require('./routes/index');
const { URL_ALLOWED } = process.env;
//server.name = "api";  // TODO  Cannot assign to read only property 'name' of function 'function(req, res, next) {
//  app.handle(req, res, next);
server.use(morgan('dev'));
server.use(body_parser_1.default.json());
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', URL_ALLOWED); // TODO averiguar como poner :string
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', 'true'),
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT');
    next();
});
server.use('/', routes);
server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});
module.exports = server;
