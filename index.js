const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello from Node.js server!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});