/**
 * Exercise: Modify the server to respond with JSON `{ "message": "Hello, World!" }`.
 */
const http = require('http');

const server = http.createServer((req, res) => {
    // Logic goes here
    // res.writeHead(200, {'content-type':'text/plain'}); 
    res.writeHead(200, {'content-type':'application/json'});

    // res.end('Hello world'); 
    res.end(JSON.stringify({ "message": "Hello, World!" }))
})

server.listen(3000, () => console.log('Server running in port 3000'))