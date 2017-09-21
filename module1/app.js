/**
 * Created by ARMY_BRAT on 19/09/2017.
 */
var http = require('http');
var fs = require('fs');

//404 response
function send404Response(response) {
    response.writeHead(404, {"Context-type": "text/plain"});
    response.write("Error 404: Page not found");
    response.end();
}

//handle user request
function onRequest(request, response) {
    if (request.method == 'GET' && request.url == "/") {

        response.writeHead(200, {"Context-type": "text/html"});
        // send a file in stream
        fs.createReadStream("module1/index.html").pipe(response);

    }
    else {
        send404Response(response);

    }

}

http.createServer(onRequest).listen(8081, "127.0.0.1");
console.log("server running at http://127.0.0.1:8081");
