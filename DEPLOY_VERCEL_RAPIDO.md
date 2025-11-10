# ⚡ Deploy Rápido na Vercel - 5 Minutos

## 🚀 Método Mais Fácil e Recomendado

---

## ✅ Passo a Passo

### **1. Criar Repositório no GitHub** (Opcional mas Recomendado)

Se ainda não tem o projeto no GitHub:

```bash
cd /Users/nathaliaabrell/Desktop/LandingPage

# Inicializar Git (se ainda não fez)
git init

# Adicionar arquivos
git add .

# Commit
git commit -m "Landing Page Sala Secreta - Pronta para Deploy"

# Criar repositório no GitHub
# Acesse: https://github.com/new
# Nome: sala-secreta-landing
# Clique em "Create repository"

# Conectar e enviar
git remote add origin https://github.com/SEU_USUARIO/sala-secreta-landing.git
git branch -M main
git push -u origin main
```

---

### **2. Deploy na Vercel**

#### **Opção A: Via GitHub (Recomendado)**

1. Acesse: https://vercel.com/signup
2. Faça login com GitHub
3. Clique em "Add New Project"
4. Selecione o repositório: `sala-secreta-landing`
5. **Configure:**
   - Framework Preset: Next.js ✅ (auto-detectado)
   - Root Directory: `./`
   - Build Command: `npm run build` (padrão)
   - Output Directory: `.next` (padrão)
6. **Clique em "Deploy"**
7. Aguarde 2-3 minutos ⏱️
8. **Pronto!** 🎉

#### **Opção B: Sem GitHub (Vercel CLI)**

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd /Users/nathaliaabrell/Desktop/LandingPage
vercel --prod
```

Responda às perguntas:
- Set up and deploy? **Y**
- Which scope? (escolha seu usuário)
- Link to existing project? **N**
- Project name? `sala-secreta-nathalia`
- Directory? `./` (Enter)
- Override settings? **N**

---

### **3. Configurar Google Sheets**

Após o primeiro deploy:

1. Vá em: **Project Settings > Environment Variables**
2. Adicione:
   ```
   Name: GOOGLE_SCRIPT_URL
   Value: (Cole a URL do seu Google Apps Script)
   ```
3. Selecione: **Production, Preview, Development**
4. Clique em **Save**
5. Vá em: **Deployments**
6. Clique nos 3 pontinhos do último deploy > **Redeploy**

---

## 🌐 Sua URL

Após o deploy, seu site estará em:

```
https://sala-secreta-nathalia.vercel.app
```

Ou uma URL parecida com:
```
https://sala-secreta-nathalia-seu-usuario.vercel.app
```

---

## 🎯 Domínio Personalizado (Opcional)

1. Vá em: **Settings > Domains**
2. Clique em **Add**
3. Digite: `salasecreta.seudominio.com`
4. Siga as instruções de DNS

---

## 📱 Testar

Depois do deploy:

1. ✅ Abra a URL
2. ✅ Teste o formulário
3. ✅ Verifique redirecionamento WhatsApp
4. ✅ Confira Google Sheets
5. ✅ Teste no celular

---

## 🔄 Atualizações Futuras

**Se usou GitHub:**
- Faça mudanças no código
- `git add .`
- `git commit -m "Atualização"`
- `git push`
- **Deploy automático!** 🎉

**Se usou Vercel CLI:**
```bash
vercel --prod
```

---

## ✨ Vantagens da Vercel

- ✅ **100% Gratuito** para projetos pessoais
- ✅ **SSL Automático** (HTTPS)
- ✅ **CDN Global** (site rápido no mundo todo)
- ✅ **Deploy Automático** via Git
- ✅ **Preview Deploys** para testar antes
- ✅ **Analytics Grátis**
- ✅ **Edge Functions** (server-side super rápido)

---

## 🆘 Precisa de Ajuda?

**Erro no Deploy?**
- Verifique se o build local funciona: `npm run build`
- Veja os logs no dashboard da Vercel
- Certifique-se que `package.json` está correto

**Google Sheets não funciona?**
- Adicione `GOOGLE_SCRIPT_URL` nas variáveis de ambiente
- Faça redeploy

---

## ⏱️ Tempo Estimado

- Com GitHub: **5-7 minutos**
- Sem GitHub (CLI): **3-5 minutos**

---

**Pronto! Seu site estará no ar em minutos! 🚀**
