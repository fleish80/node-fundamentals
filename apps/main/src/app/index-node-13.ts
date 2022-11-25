const http = require('http');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, 'templates/index.html'), {encoding: 'utf-8'});

const server = http.createServer((req, res) => {
  const path = req.url;
  if (path === '/' || path.toLowerCase() === '/home') {
    res.end(html.replace('{{%CONTENT%}}', 'You are in the home page'));
  } else {
    res.end(html.replace('{{%CONTENT%}}', 'Page not found'));
  }
});

server.listen(8000, () => {
  console.log('Server has started');
})


