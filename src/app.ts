import express, { Request, Response } from "express";
import bodyParser from "body-parser"
const morgan:any = require('morgan')
let server : any = express();
const routes:any = require('./routes/index');
const { URL_ALLOWED } = process.env;

//server.name = "api";  // TODO  Cannot assign to read only property 'name' of function 'function(req, res, next) {
//  app.handle(req, res, next);

server.use(morgan('dev'));
server.use(bodyParser.json())
server.use((req: any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin',URL_ALLOWED); // TODO averiguar como poner :string
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', 'true'),
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT');

    next();
  });

  server.use('/', routes)
server.use((err: any, req: any, res: any, next: any) => { 
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

  module.exports = server;