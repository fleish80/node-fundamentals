const http = require('http');
const fs = require('fs');

const server = http.createServer();

//SOLUTION 1: WITHOUT READABLE OR WRITABLE STREAM
// server.on('request', (req, res) => {
//   fs.readFile('./files/large-file.txt', (err, data) => {
//     if (err) {
//       res.end('Something went wrong!');
//       return;
//     }
//     res.end(data);
//   })
// });

//SOLUTION 2: SOLUTION USING READABLE AND WRITABLE STREAM
// server.on('request', (req, res) => {
//   let rs = fs.createReadStream('./files/large-file.txt');
//
//   rs.on('data', (chunk) => {
//     res.write(chunk);
//   });
//
//   res.on('end', () => {
//     res.end();
//   });
//
//   rs.on('error', (err) => {
//     res.end(err.message);
//   });
// });

//SOLUTION 3: USING PIPE METHOD
server.on('request', (req, res) => {
  let rs = fs.createReadStream('./files/large-file.txt');
  rs.pipe(res); //readableSource.pipe(writableDest)
})

server.listen(8000, () => {
  console.log('Server has started');
})
