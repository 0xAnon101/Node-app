/**
 * Created by ARMY_BRAT on 21/09/2017.
 */

var connects = require('connect');
var http = require('http');
var fs = require('fs');
//connect dispatcher --core connect object.
var app = connects();

function doFirst(request, response, next) { //middleware provider
    console.log("bacon");

}

function doSeconds(request, response, next) { //middleware provider
    console.log("Tuna");
    next();
}

app.use('/profile', doFirst);
app.use('/tuna', doSeconds);


http.createServer(app).listen(8081, "127.0.0.1");

console.log("server is running on http://127.0.0.1:8081");