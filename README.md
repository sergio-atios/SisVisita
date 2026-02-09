# 🚶 SisVisita - Sistema de Registro Porta em Porta

Sistema completo para gestão de territórios e cobertura residencial, com **PWA** (Progressive Web App) e **compartilhamento híbrido inteligente**.

---

## 📦 Arquivos do Sistema

### Arquivos HTML (Aplicações)
- `agente.html` - Interface mobile para agentes de campo
- `coordenador.html` - Gestão de equipe local (UBS)
- `supervisor.html` - Dashboard completo e criação de territórios

### Arquivos de Suporte
- `manifest.json` - Configuração PWA (permite instalar como app)
- `service-worker.js` - Funcionalidade offline
- `compartilhamento.js` - Biblioteca de compartilhamento híbrido

---

## 🚀 Como Usar

### Opção 1: Uso Local (Mais Simples)
1. Baixe todos os 6 arquivos
2. Coloque todos na mesma pasta
3. Abra qualquer `.html` no navegador
4. Pronto! Funciona 100% offline

### Opção 2: Hospedar no GitHub Pages (Recomendado)
**Vantagens:**
- ✅ Links compartilháveis via WhatsApp
- ✅ Instalável como app no celular
- ✅ Totalmente gratuito
- ✅ Funciona de qualquer lugar

**Passo a Passo:**

1. **Criar repositório no GitHub**
   - Acesse https://github.com/new
   - Nome: `sisvisita` (ou qualquer nome)
   - Marque: ✅ Public
   - Clique em "Create repository"

2. **Fazer upload dos arquivos**
   - Clique em "uploading an existing file"
   - Arraste os 6 arquivos para o GitHub
   - Clique em "Commit changes"

3. **Ativar GitHub Pages**
   - Vá em Settings (Configurações)
   - No menu lateral, clique em "Pages"
   - Em "Source", selecione: `main` branch
   - Clique em "Save"
   - Aguarde 2 minutos

4. **Pronto!** Seu link será:
   ```
   https://SEU-USUARIO.github.io/sisvisita/
   ```

---

## 📱 Como Instalar como App no Celular

### Android (Chrome/Edge/Samsung Internet)
1. Abra o link no navegador
2. Banner aparecerá: "Adicionar SisVisita à tela inicial"
3. Clique em "Adicionar"
4. Ícone aparece na tela como app normal

### iPhone (Safari)
1. Abra o link no Safari
2. Clique no botão "Compartilhar" (quadrado com seta)
3. Role para baixo e clique em "Adicionar à Tela de Início"
4. Clique em "Adicionar"

---

## 🔄 Fluxo de Trabalho

### 1️⃣ SUPERVISOR
- Cria territórios manualmente
- Cadastra UBS
- Exporta territórios (arquivo JSON)
- Acompanha dashboard geral

### 2️⃣ COORDENADOR
- Importa territórios do supervisor
- Cadastra agentes da equipe
- **Designa território → Gera LINK automático** 📱
- Envia link via WhatsApp
- Recebe devoluções dos agentes

### 3️⃣ AGENTE
- **Clica no link** recebido → Abre e pergunta se quer importar
- Marca residências visitadas (checkbox)
- Adiciona notas
- Exporta território de volta

---

## 🎯 Compartilhamento Híbrido - Como Funciona

O sistema tenta **3 métodos automáticos** na ordem:

### Método 1: Link via GitHub Gist ⭐ (Preferencial)
- **Como funciona:** Sistema cria Gist automático com território
- **Coordenador:** Recebe link curto para enviar
- **Agente:** Clica no link → Importa automaticamente
- **Limitação:** Precisa internet (só na hora de enviar/receber)
- **Vantagem:** Funciona com territórios grandes (500+ residências)

### Método 2: QR Code 📱 (Fallback)
- **Como funciona:** Gera QR Code com código temporário
- **Coordenador:** Mostra QR Code na tela
- **Agente:** Escaneia com câmera → Abre e importa
- **Limitação:** Precisa estar próximo
- **Vantagem:** Totalmente offline

### Método 3: Arquivo JSON 📄 (Fallback Final)
- **Como funciona:** Download arquivo tradicional
- **Coordenador:** Baixa arquivo e envia por WhatsApp
- **Agente:** Baixa e importa manualmente
- **Limitação:** Mais passos
- **Vantagem:** Sempre funciona

**O sistema escolhe automaticamente o melhor método disponível!**

---

## 💡 Dicas de Uso

### Para Coordenadores
1. **Sempre preencha** nome da UBS e seu nome nas configurações
2. **Cadastre agentes** antes de designar territórios
3. **Use o link compartilhado** - é mais fácil que arquivo
4. Se internet falhar, sistema gera QR Code automaticamente

### Para Agentes
1. **Clique direto no link** - não precisa baixar arquivo
2. **Salve progresso** regularmente (botão azul)
3. **Entregue** quando terminar ou parcialmente concluído
4. Se tiver dúvidas, peça ao coordenador para gerar novo link

### Para Supervisores
1. **Crie UBS primeiro**, depois territórios
2. **Exporte territórios** para coordenadores via arquivo
3. **Use Dashboard** para acompanhar progresso geral
4. **Relatórios** podem ser exportados em JSON

---

## ⚙️ Configurações Opcionais

### Desabilitar GitHub Gist
Se não quiser usar internet, edite `compartilhamento.js`:
```javascript
config: {
    gistEnabled: false,  // Mude para false
    qrEnabled: true,
    fileEnabled: true
}
```

### Personalizar Cores
Edite as variáveis CSS em cada `.html`:
```css
:root {
    --color-vibrant-green: #10b981;  /* Cor principal agente */
    --color-vibrant-orange: #f97316; /* Cor principal coordenador */
    --color-vibrant-pink: #ec4899;   /* Cor principal supervisor */
}
```

---

## 🔒 Privacidade e Dados

- ✅ **Todos os dados ficam no celular/computador** (localStorage)
- ✅ **Nenhum servidor próprio** - apenas GitHub Pages (estático)
- ✅ **GitHub Gist:** Gists são privados/anônimos, expiram automaticamente
- ✅ **Sem rastreamento** - zero analytics ou cookies
- ⚠️ **Backup manual:** Exporte territórios regularmente

---

## 🐛 Resolução de Problemas

### "Link não funciona"
- Verifique se os arquivos estão no GitHub Pages
- Aguarde 2-5 minutos após ativar Pages
- Teste em modo anônimo do navegador

### "QR Code não aparece"
- Verifique se arquivo `compartilhamento.js` está na mesma pasta
- Abra console do navegador (F12) e veja erros

### "Não consigo instalar como app"
- **Android:** Use Chrome, Edge ou Samsung Internet
- **iPhone:** Use Safari (outros navegadores não funcionam)
- Limpe cache do navegador e tente novamente

### "Arquivo não importa"
- Verifique se é arquivo `.json` válido
- Certifique-se que arquivo não está corrompido
- Tente abrir em modo anônimo

---

## 📞 Suporte

**Problemas?** Verifique:
1. Todos os 6 arquivos estão na mesma pasta?
2. Está abrindo em navegador moderno? (Chrome, Edge, Safari)
3. JavaScript está habilitado?

---

## 📄 Licença

Código aberto - use livremente para fins não comerciais.

---

## 🎉 Pronto para Usar!

**Abra qualquer `.html` no navegador e comece a usar!**

Para melhor experiência, hospede no GitHub Pages e instale como app. 📱

**Links úteis:**
- GitHub Pages: https://pages.github.com/
- Guia PWA: https://web.dev/progressive-web-apps/
