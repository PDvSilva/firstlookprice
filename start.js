#!/usr/bin/env node

// Script wrapper para garantir que logs apareçam antes de qualquer import
console.log('🚀 Starting application wrapper...');
console.log('📦 Node version:', process.version);
console.log('📦 Platform:', process.platform);
console.log('📦 CWD:', process.cwd());
console.log('📦 NODE_ENV:', process.env.NODE_ENV || 'not set');

// Aguarda um pouco para garantir que stdout está pronto
await new Promise(resolve => setTimeout(resolve, 100));

console.log('📦 Importing server...');

try {
  // Importa o servidor
  await import('./src/server.js');
  console.log('✅ Server module imported successfully');
} catch (error) {
  console.error('❌ FATAL ERROR importing server:', error);
  console.error('❌ Error stack:', error.stack);
  process.exit(1);
}

