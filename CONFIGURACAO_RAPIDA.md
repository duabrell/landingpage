# ⚡ Configuração Rápida - Google Sheets

## 🚀 3 Passos Simples

### **PASSO 1: Criar Planilha**

1. Acesse: https://sheets.google.com
2. Nova planilha: "Inscrições Sala Secreta"
3. Cabeçalhos (linha 1):
   - A1: `Data/Hora`
   - B1: `Nome`
   - C1: `Email`
   - D1: `Origem`

---

### **PASSO 2: Criar Script**

1. Na planilha: **Extensões > Apps Script**
2. Cole este código:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    var row = [
      data.timestamp || new Date().toISOString(),
      data.nome || '',
      data.email || '',
      data.origem || 'Sala Secreta - Landing Page'
    ];
    
    sheet.appendRow(row);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **Salvar** (nome: "API Sala Secreta")
4. **Implantar > Nova implantação**
   - Tipo: Aplicativo da Web
   - Acesso: Qualquer pessoa
5. **COPIAR A URL** gerada

---

### **PASSO 3: Configurar Projeto**

1. Criar arquivo `.env.local` na raiz do projeto:

```bash
touch .env.local
```

2. Adicionar no arquivo:

```
GOOGLE_SCRIPT_URL=COLE_SUA_URL_AQUI
```

3. Reiniciar servidor:

```bash
npm run dev
```

---

## ✅ Testar

1. Abra: http://localhost:3000
2. Preencha o formulário
3. Veja os dados na planilha!

---

## 📞 Suporte

Problemas? Veja o guia completo em:
- `GOOGLE_SHEETS_SETUP.md` - Guia detalhado
- `COMO_CRIAR_ENV.md` - Como criar o .env.local

---

**Tempo estimado:** 5-10 minutos ⏱️
