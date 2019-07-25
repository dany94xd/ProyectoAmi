const express = require('express');
const cors = require('cors');
const app = express();

var path = require('path')

// Settings
app.set('port', process.env.PORT || 5110);

// Middlewares
app.use('/',express.static('client',{redirect:false}));
app.use(cors({origin: 'http://162.212.130.145'}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  //starting the server
  app.get('*',function(req,res,next){
    res.sendFile(path.resolve('client/index.html'))
  });