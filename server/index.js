const http = require("http");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
// var fs = require('fs');
// var path = require('path');
// const router=require('express').Router;
// const buisnessRouter=require("./routs/api")
const router = require("./routs/api");
var bodyParser = require("body-parser");
const port = 3003;
var nodemailer = require("nodemailer");
dotenv.config();

// const server= http.createServer((req,res)=>{
//     res.write('hello world')
//     res.end();
// })

// app.get('/',(req,res)=>{
//     res.status(200).json({message:'hello'})
// })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(
  process.env.DB_CONNECTS,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log("connect to db");
  }
);

app.use("/api", router);

app.listen(port, () => {
  console.log("listening");
});

// mongoose.connection.on('connected',()=>{
//     console.log('mongoDB connected!')
// });
