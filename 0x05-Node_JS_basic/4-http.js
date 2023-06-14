const http = require('http');

const cfg = {
  port: process.env.PORT || 1245,
};

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(cfg.port, () => {
  console.log('....');
});

module.exports = app;
