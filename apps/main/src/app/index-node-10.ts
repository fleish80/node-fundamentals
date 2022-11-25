const http = require('http');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, 'templates/index.html'), {encoding: 'utf-8'});

const server = http.createServer((req, res) => {
  res.end(html);
});

server.listen(8000, () => {
  console.log('Server has started');
})


