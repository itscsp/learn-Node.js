const http = require('http');
const route = require('./routes')

const server = http.createServer(route.handler) // Getting route logic from routes.js file

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
