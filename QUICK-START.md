# 🚀 QUICK START - Deploy GitHub + Vercel

## ⚡ Deploy Rápido em 3 Passos

### PASSO 1: Criar Repositório no GitHub
1. Acesse: https://github.com/new
2. Nome: `manusbr-ai`
3. Clique em **"Create repository"**

### PASSO 2: Conectar e fazer Push
```powershell
cd C:\manusbr-ai-clean

# Configure o Git (primeira vez apenas)
git config --global user.email "seu-email@example.com"
git config --global user.name "Seu Nome"

# Conecte ao repositório (SUBSTITUA 'seu-usuario')
git remote add origin https://github.com/seu-usuario/manusbr-ai.git
git branch -M main
git push -u origin main
```

### PASSO 3: Deploy no Vercel
1. Acesse: https://vercel.com/signup
2. Escolha **"Continue with GitHub"**
3. No Dashboard:
   - Clique **"Add New..." → "Project"**
   - Selecione **"manusbr-ai"**
   - Clique **"Deploy"**
4. Aguarde 2-3 minutos
5. ✅ Pronto! Sua API está no ar!

## 🎯 Usando o Script Automatizado

Temos um script que facilita todo o processo:

```powershell
cd C:\manusbr-ai-clean
powershell -ExecutionPolicy Bypass -File deploy.ps1
```

O script oferece menu com:
1. Configurar Git
2. Conectar ao GitHub
3. Fazer commit e push
4. Deploy no Vercel via CLI
5. Ver status

## 📦 O que foi preparado

✅ `vercel.json` - Configuração do Vercel
✅ `.gitignore` - Arquivos a ignorar
✅ `package.json` - Scripts atualizados
✅ Git inicializado
✅ Primeiro commit feito
✅ Scripts de deploy criados

## 🌐 Resultado Final

Após o deploy você terá:

**GitHub**: `https://github.com/seu-usuario/manusbr-ai`
**Vercel**: `https://seu-projeto.vercel.app`

### Endpoints em Produção:
- https://seu-projeto.vercel.app/api/health
- https://seu-projeto.vercel.app/api/teams
- https://seu-projeto.vercel.app/api/players
- https://seu-projeto.vercel.app/api/analysis/rodada/15

## 🔄 Workflow de Desenvolvimento

```powershell
# 1. Faça alterações no código
# 2. Teste localmente
npm start

# 3. Commit
git add .
git commit -m "Nova feature"

# 4. Push (deploy automático!)
git push
```

## 🆘 Ajuda Rápida

### Esqueci de criar o repositório no GitHub?
Execute o script: `deploy.ps1` → Opção 2

### Erro de autenticação?
Use Personal Access Token:
1. GitHub → Settings → Developer settings
2. Personal access tokens → Generate new token
3. Use como senha

### Ver se funcionou?
```powershell
git remote -v
git log --oneline
```

## 📞 Links Úteis

- **Criar repo**: https://github.com/new
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Guia completo**: Ver arquivo `DEPLOY-GUIDE.md`

---

**Tudo pronto para deploy!** 🎉

Execute: `powershell -ExecutionPolicy Bypass -File deploy.ps1`
