# 💰 Configuração de Links de Afiliado Amazon

## Como obter suas tags de afiliado

1. **Criar conta no Amazon Associates:**
   - Acesse: https://affiliate-program.amazon.com/
   - Crie uma conta para cada país (ES, FR, DE, IT, UK)
   - Ou use uma conta única que funcione em todos

2. **Obter sua tag de afiliado:**
   - Após aprovação, você receberá uma tag única
   - Formato: `seu-nome-20` ou `seu-nome-21`
   - Cada país pode ter uma tag diferente

## Configuração

### Opção 1: Via arquivo .env (Recomendado)

Adicione no seu arquivo `.env`:

```env
# Amazon Affiliate Tags
AMAZON_AFFILIATE_ES=seu-tag-es-20
AMAZON_AFFILIATE_FR=seu-tag-fr-21
AMAZON_AFFILIATE_DE=seu-tag-de-21
AMAZON_AFFILIATE_IT=seu-tag-it-21
AMAZON_AFFILIATE_UK=seu-tag-uk-21
```

### Opção 2: Editar diretamente no código

Edite `src/server.js` e substitua as tags padrão:

```javascript
const AFFILIATE_TAGS = {
  'es': 'seu-tag-es-20',
  'fr': 'seu-tag-fr-21',
  'de': 'seu-tag-de-21',
  'it': 'seu-tag-it-21',
  'uk': 'seu-tag-uk-21'
};
```

## Como funciona

- Todos os links gerados automaticamente incluem sua tag de afiliado
- Exemplo: `https://amazon.es/dp/B08N5WRWNW?tag=seu-tag-es-20`
- Você ganha comissão em cada compra feita através dos seus links

## Importante

- ⚠️ **Nunca commite suas tags reais no Git**
- ✅ Use variáveis de ambiente (`.env`)
- ✅ Adicione `.env` ao `.gitignore` (já está)
- ✅ Para produção (Render), configure as variáveis no dashboard

## Configurar no Render.com

1. Vá em Settings → Environment Variables
2. Adicione cada variável:
   - `AMAZON_AFFILIATE_ES`
   - `AMAZON_AFFILIATE_FR`
   - `AMAZON_AFFILIATE_DE`
   - `AMAZON_AFFILIATE_IT`
   - `AMAZON_AFFILIATE_UK`

## Teste

Após configurar, teste um link gerado:
- Deve conter `?tag=sua-tag` no final
- Clique no link e verifique se redireciona corretamente

---

**Nota:** Se você não tiver tags de afiliado ainda, os links funcionarão normalmente, apenas sem gerar comissão.

