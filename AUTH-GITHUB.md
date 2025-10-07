# 🔐 Autenticação GitHub - NeoxRoot

## ⚠️ Problema Detectado

Você está autenticado como: **guumoreira23**
Mas o repositório está em: **NeoxRoot**

Resultado: ❌ Permissão negada

## ✅ Solução: Autenticar como NeoxRoot

### Opção 1: GitHub CLI (Mais Fácil) ⭐

```powershell
# 1. Instalar GitHub CLI
winget install GitHub.cli

# 2. Fazer logout da conta atual
gh auth logout

# 3. Fazer login com a conta NeoxRoot
gh auth login
```

Siga as instruções:
- Escolha: **GitHub.com**
- Protocol: **HTTPS**
- Authenticate: **Login with a web browser**
- Copie o código e cole no navegador
- **IMPORTANTE**: Faça login com a conta **NeoxRoot**

### Opção 2: Personal Access Token

1. **Faça login no GitHub com a conta NeoxRoot**
2. Acesse: https://github.com/settings/tokens
3. Clique: **"Generate new token"** → **"Generate new token (classic)"**
4. Configure:
   - Note: `ManusBR Deploy`
   - Expiration: `90 days` (ou o que preferir)
   - ✅ Marque: **`repo`** (full control)
5. Clique: **"Generate token"**
6. **COPIE O TOKEN** (você não verá novamente!)

Depois execute:
```powershell
# Configurar credencial
git config --global credential.helper wincred

# Fazer push (vai pedir usuário e senha)
git push -u origin main

# Quando pedir:
# Username: NeoxRoot
# Password: COLE_SEU_TOKEN_AQUI
```

### Opção 3: SSH (Mais Seguro)

```powershell
# 1. Gerar chave SSH
ssh-keygen -t ed25519 -C "giovanemoreira_@hotmail.com"

# 2. Adicionar ao SSH Agent
Start-Service ssh-agent
ssh-add ~/.ssh/id_ed25519

# 3. Copiar a chave pública
Get-Content ~/.ssh/id_ed25519.pub | clip

# 4. No GitHub (conta NeoxRoot):
# Settings → SSH and GPG keys → New SSH key
# Cole a chave e salve

# 5. Mudar remote para SSH
git remote set-url origin git@github.com:NeoxRoot/ManusBR.git

# 6. Fazer push
git push -u origin main
```

## 🎯 Recomendação

**Use a Opção 1 (GitHub CLI)** - é a mais simples!

Basta executar:
```powershell
winget install GitHub.cli
gh auth logout
gh auth login
```

E faça login com **NeoxRoot** quando o navegador abrir.

## 🔄 Depois da Autenticação

Assim que estiver autenticado, execute:
```powershell
git push -u origin main
```

E seu código subirá para:
**https://github.com/NeoxRoot/ManusBR** ✅

## 📞 Precisa de Ajuda?

Me avise qual opção você quer usar e eu te guio passo a passo!

---

**Status Atual:**
✅ Git configurado
✅ Repositório remoto conectado
❌ Autenticação pendente (guumoreira23 → NeoxRoot)
⏳ Aguardando: Autenticar como NeoxRoot
