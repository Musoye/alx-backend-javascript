const http = require('http');

const app = http.createServer()

app.on('request', (_, res) => {
  res.end('Hello Holberton School!');
});

server.listen(1245, '127.0.0.1', () => {
  console.log('Hello Holberton School!');
});
module.exports = app
