const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === '/' || path.toLowerCase() === '/home') {
    res.end('You are in home page');
  } else {
    res.end('You are not in home page');
  }

  res.end(path);
});

server.listen(8000, () => {
  console.log('Server has started');
})


