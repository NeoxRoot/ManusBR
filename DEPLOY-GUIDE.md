# 🚀 Guia de Deploy - GitHub + Vercel

## ✅ Preparação Concluída

Os seguintes arquivos foram criados para o deploy:
- ✅ `vercel.json` - Configuração do Vercel
- ✅ `.gitignore` - Arquivos a ignorar
- ✅ `package.json` - Atualizado com scripts
- ✅ Git inicializado e primeiro commit feito

## 📋 Passo a Passo para Deploy

### 1️⃣ Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Preencha:
   - **Repository name**: `manusbr-ai`
   - **Description**: `IA para análise de futebol brasileiro`
   - **Visibility**: Public ou Private (sua escolha)
   - ❌ NÃO marque "Add README" (já temos)
3. Clique em **"Create repository"**

### 2️⃣ Conectar o Repositório Local ao GitHub

Após criar o repositório, execute no PowerShell:

```powershell
cd C:\manusbr-ai-clean

# Adicionar o repositório remoto (SUBSTITUA 'seu-usuario' pelo seu usuário do GitHub)
git remote add origin https://github.com/seu-usuario/manusbr-ai.git

# Renomear branch para main
git branch -M main

# Fazer push
git push -u origin main
```

**Nota**: Você precisará fazer login no GitHub quando solicitado.

### 3️⃣ Criar Conta e Deploy no Vercel

#### Opção A: Via Browser (Recomendado)

1. **Acesse**: https://vercel.com/signup
2. **Escolha**: "Continue with GitHub"
3. **Autorize** o Vercel a acessar seus repositórios
4. No Dashboard do Vercel:
   - Clique em **"Add New..."** → **"Project"**
   - Selecione o repositório **"manusbr-ai"**
   - Clique em **"Import"**
5. **Configurações do Projeto**:
   - Framework Preset: **Other**
   - Build Command: (deixe vazio)
   - Output Directory: (deixe vazio)
   - Install Command: `npm install`
6. Clique em **"Deploy"**

#### Opção B: Via CLI

```powershell
# Instalar Vercel CLI
npm install -g vercel

# Login no Vercel
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### 4️⃣ Após o Deploy

Você receberá uma URL como:
```
https://manusbr-ai.vercel.app
```

Teste os endpoints:
- https://seu-projeto.vercel.app/api/health
- https://seu-projeto.vercel.app/api/test
- https://seu-projeto.vercel.app/api/teams

## 🔧 Comandos Git Úteis

### Fazer alterações e atualizar
```powershell
# Ver status
git status

# Adicionar alterações
git add .

# Commit
git commit -m "Descrição das alterações"

# Push para GitHub
git push
```

### Ver histórico
```powershell
git log --oneline
```

### Criar branch
```powershell
git checkout -b nova-feature
```

## 🌐 URLs Importantes

Após o deploy, você terá:

- **GitHub Repo**: `https://github.com/seu-usuario/manusbr-ai`
- **Vercel Dashboard**: `https://vercel.com/dashboard`
- **API em Produção**: `https://seu-projeto.vercel.app/api/`

## 🔄 Fluxo de Trabalho

1. Faça alterações no código local
2. Teste localmente: `npm start`
3. Commit: `git add . && git commit -m "mensagem"`
4. Push: `git push`
5. **Deploy automático** no Vercel! 🎉

## 📝 Variáveis de Ambiente no Vercel

Se precisar adicionar chaves de API:

1. Acesse o projeto no Vercel Dashboard
2. Vá em **Settings** → **Environment Variables**
3. Adicione suas variáveis:
   - `API_FUTEBOL_KEY`
   - `API_FOOTBALL_KEY`
   - `NEWS_API_KEY`

## 🎯 Próximos Passos

Após o deploy bem-sucedido:

1. ✅ Compartilhe a URL da API
2. ✅ Configure domínio customizado (opcional)
3. ✅ Adicione mais features
4. ✅ Configure CI/CD (já automático com Vercel!)

## 🆘 Troubleshooting

### Erro ao fazer push
```powershell
# Configure seu usuário Git
git config --global user.email "seu-email@example.com"
git config --global user.name "Seu Nome"
```

### Autenticação GitHub
Use um **Personal Access Token** se necessário:
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Marque `repo` scope
4. Use o token como senha ao fazer push

### Erro no Deploy Vercel
- Verifique os logs no Vercel Dashboard
- Confirme que `server.js` está no root do projeto
- Verifique se `vercel.json` está correto

## 📞 Suporte

- **GitHub Docs**: https://docs.github.com
- **Vercel Docs**: https://vercel.com/docs

---

**Status**: ✅ Pronto para deploy
**Última atualização**: 07/10/2025
