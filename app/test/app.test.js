/*
 Simple smoke test: call /health and exit 0 if 200
 Run: node ./test/app.test.js
*/
const http = require('http');

const options = {
  hostname: 'localhost',
  port: process.env.PORT || 3000,
  path: '/health',
  method: 'GET',
  timeout: 2000
};

const req = http.request(options, res => {
  console.log('statusCode:', res.statusCode);
  process.exit(res.statusCode === 200 ? 0 : 1);
});

req.on('error', err => {
  console.error('error:', err.message);
  process.exit(1);
});
req.end();
