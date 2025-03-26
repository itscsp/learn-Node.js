const { handler } = require("../01-basics/routes");

const routeHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>My NodeJS Assignment</title></head>');
        res.write('<body>');
<<<<<<< HEAD
        res.write('<h1>My NodeJS Assignment Part 1 </h1>')
=======
        res.write('<h1>My NodeJS Assignment Part 1</h1>')
>>>>>>> b5cf2ca (01-Basic Assingment)
        res.write('<a href="/users">Users List</a>')
        res.write('<hr>')
        res.write('<h1>My NodeJS Assignment Part 2</h1>')
        res.write('<form action="/create-user" method="POST">')
        res.write('<input type="text" name="username"  />');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>')
        res.write('</body>');
        res.write('</html>');

        return res.end();
    }

    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>Users: My NodeJS Assignment</title></head>');
        res.write('<body>');
        res.write('<h1>My NodeJS Assignment</h1>')
        res.write('<h2>Users List</h2>')
        res.write('<ul>');

        for(let i = 0; i<5; i++){
            res.write(`<li>User ${i}</li>`)
        }

        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');

        return res.end();
    }

    if(url === '/create-user' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {  // FIXED: Changed res.on to req.on
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => { // FIXED: Changed res.on to req.on
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log("Received Username:", message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });

        return;
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My NodeJS Assignment</title></head>');
    res.write('<body>');
    res.write('<h1>My Default page</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
};

module.exports = {
    handler: routeHandler
}