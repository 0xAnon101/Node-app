/**
 * Created by ARMY_BRAT on 19/09/2017.
 */
var http = require('http');


function onRequest(request, response) {

    response.writeHead(200, {'Context-type': 'text/plain'});
    response.write("Hello world");
    response.end();
}
http.createServer(onRequest).listen(8081, "127.0.0.1");