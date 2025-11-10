# 🔧 Como Criar o Arquivo .env.local

## Passo a Passo Rápido

### **1. Criar o Arquivo**

No terminal, dentro da pasta do projeto:

```bash
touch .env.local
```

OU

Crie manualmente um arquivo chamado `.env.local` na raiz do projeto.

---

### **2. Adicionar a URL do Google Script**

Abra o arquivo `.env.local` e adicione:

```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SEU_ID_AQUI/exec
```

**Substitua** `SEU_ID_AQUI` pela URL que você copiou do Google Apps Script.

---

### **3. Exemplo Completo**

Seu arquivo `.env.local` deve ficar assim:

```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/exec
```

---

### **4. Reiniciar o Servidor**

Após salvar o arquivo, reinicie o servidor:

```bash
npm run dev
```

---

## ✅ Pronto!

Agora os dados do formulário serão salvos automaticamente no Google Sheets! 🎉

---

**Importante:**
- ⚠️ Nunca compartilhe este arquivo
- ⚠️ Ele já está no `.gitignore` (não vai para o Git)
- ✅ Cada ambiente (local, produção) tem seu próprio `.env`
