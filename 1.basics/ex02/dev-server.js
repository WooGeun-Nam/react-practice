var http = require('http');
var path = require('path');
var express = require('express');

var mainRouter = require('./routes/main')
var userRouter = require('./routes/user')
var port = 9090;

// setup application
var application = express().use(express.static(path.join(__dirname, "assets")));

// server start
http
    .createServer(application)
    .on('listening', function(){
        console.log('http server running on' + port);
    })
    .on('error', function(error){
        console.error(error);
    })
    .listen(port);