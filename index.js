// Servidor ultra-simples na raiz para testar
const http = require('http');

const PORT = process.env.PORT || 10000;

console.log('=== SERVER STARTING ===');
console.log('PORT:', PORT);
console.log('Node version:', process.version);
console.log('CWD:', process.cwd());

const server = http.createServer((req, res) => {
  console.log('Request:', req.method, req.url);
  
  if (req.url === '/health' || req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', port: PORT }));
    return;
  }
  
  if (req.url === '/test' || req.url === '/api/test') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', message: 'Basic server working' }));
    return;
  }
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Server is running on port ' + PORT);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`=== SERVER RUNNING ON PORT ${PORT} ===`);
  console.log(`Health check: http://0.0.0.0:${PORT}/health`);
});

server.on('error', (err) => {
  console.error('SERVER ERROR:', err);
  process.exit(1);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down');
  server.close(() => {
    process.exit(0);
  });
});

console.log('=== SETUP COMPLETE ===');

