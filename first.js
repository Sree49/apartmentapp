var express = require('express');
var http=require('http');
var path=require('path');
var bodyParser = require('body-parser');
var mongo=require('mongodb');
var app=express();
var router=express.Router();
var port=8000;
var assert=require('assert');
//var url='mongodb://localhost:27017/node-demo';
var mongoose = require('mongoose');
//view engine
app.set('public',path.join(__dirname,'public'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//set static folder
app.use(express.static(path.join(__dirname,'apart')));

//body parser
app.use(bodyParser.json());
//app.use('/users',UserRoute);
app.use(bodyParser.urlencoded({extended:true}));


app.listen(port,function()
{
    console.log('server started on port '+port);
});

const cors=require('cors');
app.use(cors());
//var mongoose=require('mongoose');
//mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/demo-node");

