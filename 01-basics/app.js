const http = require('http');
const fs = require('fs')


const server = http.createServer((req, res) => {
    // console.log(req)
    // process.exit();

    const url = req.url;
    const method = req.method;

    // Routing requests
    if(url === '/') {
      res.write('<html>');
      res.write('<head><title>My first page</title></head>');
      res.write('<body>');
      res.write('<form action="/message" method="POST">');
      res.write('<input type="text" name="message"  />');
      res.write('<button type="submit">Send</button>');
      res.write('</form>');
      res.write('<body>');
      res.write('</html>');

      return res.end();
    }

    // Redirecting Requests
    if(url === '/message' && method === 'POST')  {
      fs.writeFileSync('demo.txt', "HelloHello");
      res.statusCode = 302
      res.setHeader('Location', '/');
      return res.end();
    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body>');
    res.write('<h1>Hello from my Node.js Server!s</h1>');
    res.write('<body>');
    res.write('</html>');

});

server.listen(3000);