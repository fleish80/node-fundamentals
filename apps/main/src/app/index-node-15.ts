const http = require('http');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, 'templates/index.html'), {encoding: 'utf-8'});

const server = http.createServer((req, res) => {
  const pathRoute = req.url;
  if (pathRoute === '/' || pathRoute.toLowerCase() === '/home') {
    res.writeHead(200,
      {
        'Content-Type': 'text/html',
        'my-header': 'Hello World'
      }
    );
    res.end(html.replace('{{%CONTENT%}}', 'You are in the home page'));
  } else if (pathRoute.toLowerCase() === '/products') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    fs.readFile(path.resolve(__dirname, 'data/products.json'), {encoding: 'utf-8'}, (error, data) => {
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end(html.replace('{{%CONTENT%}}', 'Page not found'));
  }
});

server.listen(8000, () => {
  console.log('Server has started');
})


