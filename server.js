//Node modules
var bodyParser = require("body-parser");
var express = require('express');
var path = require('path');
var config = require('./helpers/config');
var db = require('./helpers/db');
var routes = require('./routes');
var fs = require('fs');
var express = require('express');

var app = express();
var port = Number(process.env.PORT) || '8080';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json({limit: '50mb'}));
//app.use(bodyParser.urlencoded({limit: '50mb'}));
//app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));




//connect to the DB
var dbcon = process.env.MONGOLAB_URI || config.database.url;

db.connect(dbcon, config.database.options);

/*process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});*/

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send(new response('Data Something went wrong!'));
});

//starts and listen to the port
app.listen(port, function(){
  console.log("Server started in %d", port);
});

routes(app);
