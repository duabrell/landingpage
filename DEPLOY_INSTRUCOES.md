# 🚀 Deploy da Sala Secreta - Landing Page

## ✅ Build Concluído com Sucesso!

O projeto foi compilado e está pronto para deploy. Escolha uma das opções abaixo:

---

## 🎯 OPÇÃO 1: Vercel (Recomendado - Mais Fácil)

**Melhor opção para Next.js!** ⭐

### Passos:

1. **Acesse:** https://vercel.com/signup
2. **Login com GitHub** (se não tiver conta, crie uma gratuita)
3. **Import Project:**
   - Clique em "Add New Project"
   - Selecione "Import Git Repository"
   - Se o projeto não estiver no GitHub, escolha "Import from Local"
   
4. **Configurar:**
   - Framework Preset: **Next.js** (já detecta automaticamente)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

5. **Variáveis de Ambiente:**
   - Adicione: `GOOGLE_SCRIPT_URL` com a URL do seu Google Apps Script
   - (Você configura isso depois da primeira publicação)

6. **Deploy!** 
   - Clique em "Deploy"
   - Aguarde ~2 minutos
   - Seu site estará no ar! 🎉

### URL Final:
```
https://sala-secreta-nathalia.vercel.app
```
(ou personalize o domínio)

---

## 🌐 OPÇÃO 2: Netlify Manual (Arrasta e Solta)

### Passos:

1. **Acesse:** https://app.netlify.com/drop

2. **Fazer Build Local:**
   ```bash
   cd /Users/nathaliaabrell/Desktop/LandingPage
   npm run build
   ```

3. **Arrastar a pasta `.next`** para o Netlify Drop

4. **Pronto!** Site no ar em segundos

**Nota:** Para usar com Next.js corretamente, recomendo a Opção 1 (Vercel) ou Opção 3 (Netlify CLI).

---

## 🔧 OPÇÃO 3: Netlify CLI

### Passo 1: Instalar Netlify CLI

```bash
npm install -g netlify-cli
```

### Passo 2: Login

```bash
netlify login
```

### Passo 3: Deploy

```bash
cd /Users/nathaliaabrell/Desktop/LandingPage
netlify deploy --prod
```

Siga as instruções:
- Create new site? **Yes**
- Team: Escolha seu time
- Site name: `sala-secreta-nathalia`
- Deploy path: `.next`

### URL Final:
```
https://sala-secreta-nathalia.netlify.app
```

---

## 📊 Configurar Google Sheets Após Deploy

Depois de fazer o deploy, você precisa adicionar a variável de ambiente:

### **Na Vercel:**
1. Vá em: Project Settings > Environment Variables
2. Adicione:
   - Name: `GOOGLE_SCRIPT_URL`
   - Value: `https://script.google.com/macros/s/SEU_ID/exec`
3. Clique em "Save"
4. Redeploy (Deploy > Redeploy)

### **No Netlify:**
1. Site Settings > Environment Variables
2. Add Variable:
   - Key: `GOOGLE_SCRIPT_URL`
   - Value: `https://script.google.com/macros/s/SEU_ID/exec`
3. Save
4. Trigger Deploy (Deploys > Trigger Deploy)

---

## 🎨 Domínio Personalizado (Opcional)

Após o deploy, você pode adicionar um domínio próprio:

### Vercel:
- Settings > Domains > Add Domain
- Exemplo: `salasecreta.nathaliaabrell.com`

### Netlify:
- Domain Settings > Add Custom Domain
- Exemplo: `salasecreta.nathaliaabrell.com`

---

## ✅ Checklist Pós-Deploy

- [ ] Site está no ar
- [ ] Formulário funcionando
- [ ] Google Sheets configurado (variável de ambiente)
- [ ] Redirecionamento WhatsApp funcionando
- [ ] Teste em mobile
- [ ] Teste inscrição completa

---

## 🔍 Testar o Site

Depois do deploy, teste:

1. ✅ Abra a URL
2. ✅ Preencha o formulário
3. ✅ Verifique WhatsApp (redirecionamento)
4. ✅ Confira Google Sheets (dados salvos)

---

## 🆘 Problemas Comuns

### "Google Sheets não está salvando"
- Verifique se adicionou `GOOGLE_SCRIPT_URL` nas variáveis de ambiente
- Faça um redeploy após adicionar

### "Imagem não aparece"
- Certifique-se que `nathalia-profile.png` está em `public/images/`
- Commit e redeploy

### "Erro 404"
- Next.js precisa de servidor Node.js
- Use Vercel (ideal) ou Netlify com Next.js plugin

---

## 🎉 Recomendação Final

**Use a Vercel (Opção 1)!** 

É a plataforma oficial do Next.js, tem:
- ✅ Deploy automático
- ✅ SSL grátis
- ✅ CDN global
- ✅ Otimizações automáticas
- ✅ 100% gratuito para projetos pequenos

---

**Quer que eu faça o deploy pra você via CLI?** 

Ou prefere fazer manualmente seguindo uma das opções acima?
