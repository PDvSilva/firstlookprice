# 🚀 Guia de Deploy - Amazon EU Price Comparator

## Opção 1: Render.com (Recomendado - Grátis)

### Passo a passo:

1. **Criar conta no Render:**
   - Acesse: https://render.com
   - Faça login com GitHub/GitLab/Google

2. **Conectar repositório:**
   - No dashboard, clique em "New +" → "Web Service"
   - Conecte seu repositório GitHub/GitLab
   - Selecione o branch `main` ou `master`

3. **Configurar o serviço:**
   - **Name:** `firstlookprice` (ou `FirstLookPrice`)
   - **Environment:** `Node`
   - **Build Command:** `npm install --prefer-offline --no-audit`
   - **Start Command:** `npm start`
   - **Plan:** Free (ou Hobby se quiser melhor performance)

4. **Variáveis de ambiente:**
   - Não precisa adicionar nada (o `.env` não é commitado)
   - O Render usa automaticamente a porta da variável `PORT`

5. **Deploy:**
   - Clique em "Create Web Service"
   - Aguarde o build completar (~2-3 minutos)
   - Seu app estará disponível em: `https://firstlookprice.onrender.com` (ou o nome que escolher)

### ⚠️ Notas importantes para Render:

- O plano grátis coloca o app em "sleep" após 15min de inatividade
- Primeira requisição após sleep pode demorar ~30s para "acordar"
- Para evitar sleep, use o plano Hobby ($7/mês) ou adicione um ping automático

---

## Opção 2: Railway.app

### Passo a passo:

1. **Criar conta:**
   - Acesse: https://railway.app
   - Login com GitHub

2. **Novo projeto:**
   - "New Project" → "Deploy from GitHub repo"
   - Selecione seu repositório

3. **Configurações:**
   - Railway detecta automaticamente Node.js
   - Adicione variável de ambiente:
     - `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=false`

4. **Deploy:**
   - Railway faz deploy automático
   - URL será gerada automaticamente

---

## Opção 3: VPS (Hetzner/DigitalOcean)

### Requisitos:
- Ubuntu 22.04 LTS
- 2GB RAM mínimo
- Node.js 18+ instalado

### Comandos no servidor:

```bash
# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clonar repositório
git clone https://github.com/seu-usuario/amazon-eu-comparator.git
cd amazon-eu-comparator

# Instalar dependências
npm install

# Instalar PM2 para manter o app rodando
npm install -g pm2

# Iniciar o app
pm2 start src/server.js --name amazon-comparator
pm2 save
pm2 startup
```

### Configurar Nginx (opcional):

```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔧 Ajustes necessários para produção

O código já está preparado para produção, mas você pode:

1. **Adicionar rate limiting** (opcional):
```bash
npm install express-rate-limit
```

2. **Adicionar logging** (opcional):
```bash
npm install morgan
```

3. **Configurar CORS** para domínio específico (já está aberto, mas pode restringir)

---

## 📊 Monitoramento

### Render.com:
- Dashboard mostra logs, métricas, uptime
- Grátis: logs básicos
- Hobby: logs detalhados + alertas

### Railway:
- Dashboard com logs em tempo real
- Métricas de CPU/RAM
- Alertas configuráveis

---

## 🐛 Troubleshooting

### Erro: "Puppeteer failed to launch"
- Adicione no `server.js` ou `amazonPuppeteer.js`:
```javascript
args: [
  '--no-sandbox',
  '--disable-setuid-sandbox',
  '--disable-dev-shm-usage',
  '--disable-gpu',
  '--single-process' // Para Render/Railway
]
```

### App vai para "sleep" no Render
- Solução 1: Upgrade para plano Hobby
- Solução 2: Adicione um cron job externo (ex: cron-job.org) que faz ping a cada 10min

### Timeout nas requisições
- Aumente o timeout no Render: Settings → Timeout → 300s

---

## ✅ Checklist pós-deploy

- [ ] Testar endpoint: `https://seu-app.onrender.com/api/health`
- [ ] Testar comparação: `https://seu-app.onrender.com/compare?q=iphone`
- [ ] Testar interface web: `https://seu-app.onrender.com`
- [ ] Verificar logs para erros
- [ ] Configurar domínio personalizado (opcional)

---

## 🌐 Domínio personalizado

### Render:
1. Settings → Custom Domain
2. Adicione seu domínio
3. Configure DNS conforme instruções

### Railway:
1. Settings → Domains
2. Adicione domínio
3. Configure DNS

---

**Pronto para deploy! 🚀**

