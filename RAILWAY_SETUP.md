# 🚂 Deploy no Railway.app (Alternativa ao Render)

Railway é mais simples e geralmente funciona melhor com Puppeteer.

## Passo a passo:

1. **Criar conta:**
   - Acesse: https://railway.app
   - Login com GitHub (grátis)

2. **Novo projeto:**
   - Clique em "New Project"
   - Selecione "Deploy from GitHub repo"
   - Escolha `amazon-eu-comparator`

3. **Railway detecta automaticamente:**
   - Node.js
   - Comando de start: `npm start`
   - Porta: automática (via variável `PORT`)

4. **Variáveis de ambiente (opcional):**
   - Settings → Variables
   - Adicione se quiser:
     - `PORT=10000` (geralmente não precisa)
     - `NODE_ENV=production`

5. **Deploy automático:**
   - Railway faz deploy automaticamente
   - URL será gerada: `https://seu-app.railway.app`

## ✅ Vantagens do Railway:
- Mais fácil de configurar
- Suporta Puppeteer melhor
- Logs mais detalhados
- Deploy automático a cada push

## 🎯 Pronto!
O app deve funcionar imediatamente após o deploy.

