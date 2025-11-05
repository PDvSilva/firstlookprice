// Servidor Express mínimo para testar
import express from 'express';

const app = express();
const PORT = process.env.PORT || 10000;

console.log('MINIMAL: Server starting...');
console.log('MINIMAL: PORT:', PORT);
console.log('MINIMAL: Node version:', process.version);

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Minimal server working' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`MINIMAL: Server running on port ${PORT}`);
});

console.log('MINIMAL: Server setup complete');

