const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from this server');
  console.log('A new request received');
  console.log({req});
  console.log({res});
});

server.listen(8000, () => {
  console.log('Server has started');
})


