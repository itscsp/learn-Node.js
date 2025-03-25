const fs = require('fs')

const routeHandler = (req, res) => {
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

      const  body = []

      req.on('data', (chunk) => {
        console.log(chunk)
        body.push(chunk)
      })

      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1]
        
        // block code next to this untill writing to file completed.       
        /*
        fs.writeFileSync('message.txt', message)  
        res.statusCode = 302
        res.setHeader('Location', '/');
        return res.end();
        */
        // Aleterntive
        
          fs.writeFile('message.txt', message, () => {
              res.statusCode = 302
              res.setHeader('Location', '/');
              return res.end();
          })  
        
        
      })

    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>'); 
    res.write('<head><title>My first page</title></head>');
    res.write('<body>');
    res.write('<h1>Hello from my Node.js Server!s</h1>');
    res.write('<body>');
    res.write('</html>');

}

module.exports = routeHandler