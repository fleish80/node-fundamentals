const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const html = fs.readFileSync(path.resolve(__dirname, 'templates/index.html'), {encoding: 'utf-8'});

const server = http.createServer((req, res) => {
  const pathRoute = req.url;
  const {pathname, path, query} = url.parse(req.url, true);
  if (query.id) {
    res.end(`id=${query.id}`);
  } else {
    res.end('id query string not found');
  }
});

server.listen(8000, () => {
  console.log('Server has started');
})


