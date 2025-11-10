# 📊 Configuração Google Sheets - Sala Secreta

## 🎯 Passo a Passo Completo

### **1️⃣ Criar a Planilha**

1. Acesse: https://sheets.google.com
2. Crie uma nova planilha
3. Nomeie: **"Inscrições Sala Secreta"**
4. Na primeira linha (cabeçalho), adicione:
   - **A1:** Data/Hora
   - **B1:** Nome
   - **C1:** Email
   - **D1:** Origem

---

### **2️⃣ Criar o Google Apps Script**

1. Na planilha, clique em: **Extensões > Apps Script**
2. Delete o código padrão
3. Cole o código abaixo:

```javascript
function doPost(e) {
  try {
    // Pegar a planilha ativa
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parsear os dados recebidos
    var data = JSON.parse(e.postData.contents);
    
    // Preparar a linha de dados
    var row = [
      data.timestamp || new Date().toISOString(),
      data.nome || '',
      data.email || '',
      data.origem || 'Sala Secreta - Landing Page'
    ];
    
    // Adicionar na planilha
    sheet.appendRow(row);
    
    // Retornar sucesso
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Dados salvos!' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Retornar erro
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Função de teste (opcional)
function testPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        nome: 'Teste Nome',
        email: 'teste@email.com',
        origem: 'Teste'
      })
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

4. Clique em **💾 Salvar** (ícone de disquete)
5. Nomeie o projeto: **"API Sala Secreta"**

---

### **3️⃣ Publicar o Script**

1. Clique em **Implantar > Nova implantação**
2. Clique no ícone de **⚙️ engrenagem** > Selecione **Aplicativo da Web**
3. Configure:
   - **Descrição:** "API Inscrições Sala Secreta"
   - **Executar como:** Eu (seu email)
   - **Quem tem acesso:** Qualquer pessoa
4. Clique em **Implantar**
5. **IMPORTANTE:** Autorize o acesso quando solicitado
6. **COPIE A URL** que aparece (começa com `https://script.google.com/...`)

---

### **4️⃣ Configurar no Projeto**

1. Abra o arquivo `.env.local` na pasta do projeto
   - Se não existir, crie um arquivo chamado `.env.local`

2. Adicione a linha:
```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SEU_ID_AQUI/exec
```

3. **Cole a URL que você copiou no passo 3**

---

### **5️⃣ Testar**

1. Reinicie o servidor local:
```bash
npm run dev
```

2. Acesse: http://localhost:3000

3. Preencha o formulário com dados de teste

4. Verifique se apareceu na planilha do Google Sheets!

---

## ✅ Exemplo de Como Deve Ficar

### **Planilha Google Sheets:**
```
Data/Hora              | Nome           | Email              | Origem
2024-11-10 21:00:00   | Maria Silva    | maria@email.com    | Sala Secreta - Landing Page
2024-11-10 21:05:00   | João Santos    | joao@email.com     | Sala Secreta - Landing Page
```

### **Arquivo .env.local:**
```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxxxxxxxxxxx/exec
```

---

## 🔧 Troubleshooting

### **Erro: "Authorization required"**
- Volte no Apps Script
- Clique em **Implantar > Gerenciar implantações**
- Clique no ícone de lápis (editar)
- Confirme as permissões novamente

### **Dados não aparecem na planilha**
1. Verifique se a URL está correta no `.env.local`
2. Verifique se reiniciou o servidor (`npm run dev`)
3. Abra o console do navegador (F12) para ver erros
4. Teste o script direto no Apps Script (função `testPost`)

### **Erro de CORS**
- Certifique-se de que selecionou "Qualquer pessoa" no acesso
- A URL deve terminar com `/exec` (não `/dev`)

---

## 📱 Notificação no WhatsApp

O formulário já está configurado para:
1. ✅ Salvar no Google Sheets
2. ✅ Redirecionar para WhatsApp com os dados

Ambos acontecem ao mesmo tempo! 🎉

---

## 🔐 Segurança

- ✅ A URL do Google Script é segura
- ✅ Não exponha dados sensíveis na planilha
- ✅ O arquivo `.env.local` não é enviado ao Git (já está no .gitignore)

---

## 📊 Próximos Passos

Depois de configurado, você pode:
- Adicionar mais colunas na planilha
- Criar gráficos e relatórios
- Exportar dados para análise
- Integrar com outras ferramentas

---

**Pronto! Agora suas inscrições serão salvas automaticamente! 🚀**
