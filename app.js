/**
 * Created by tanimoto on 5/14/14.
 */

var http = require('http');

http.createServer( function(req, res) {
    res.writeHead( 'Content-Type:', 'text/plain');
    res.end('Hello World!');
}).listen(3210, '127.0.0.1');
console.log('Server running at 127.0.0.1:3210');


