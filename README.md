# ManusBR-AI - Versão Funcional

IA para análise de futebol brasileiro e recomendações de escalação.

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 18+ instalado

### Instalação
```bash
cd C:\manusbr-ai-clean
npm install
```

### Executar o servidor
```bash
npm start
```

O servidor estará disponível em: http://localhost:3001

## 📊 Endpoints Disponíveis

### Health Check
```bash
GET http://localhost:3001/api/health
```

### Times
```bash
GET http://localhost:3001/api/teams
```

### Jogadores
```bash
GET http://localhost:3001/api/players
GET http://localhost:3001/api/players?pos=ATA
GET http://localhost:3001/api/players?timeId=1
```

### Jogos/Fixtures
```bash
GET http://localhost:3001/api/fixtures
GET http://localhost:3001/api/fixtures?rodada=15
```

### Análise da Rodada
```bash
GET http://localhost:3001/api/analysis/rodada/15
```

### Construir Escalação
```bash
POST http://localhost:3001/api/lineup/build
Content-Type: application/json

{
  "rodada": 15,
  "perfil": "seguro",
  "orcamento": 120,
  "maxPorTime": 3
}
```

### Notícias
```bash
GET http://localhost:3001/api/news
```

## 🧪 Testar a API

### Usando curl (PowerShell)
```powershell
# Health check
curl http://localhost:3001/api/health

# Listar times
curl http://localhost:3001/api/teams

# Listar jogadores
curl http://localhost:3001/api/players

# Análise da rodada
curl http://localhost:3001/api/analysis/rodada/15

# Construir escalação
curl -X POST http://localhost:3001/api/lineup/build -H "Content-Type: application/json" -d '{\"rodada\":15,\"perfil\":\"seguro\"}'
```

### Usando navegador
Abra no navegador:
- http://localhost:3001/api/health
- http://localhost:3001/api/test
- http://localhost:3001/api/teams
- http://localhost:3001/api/players

## 📁 Estrutura do Projeto

```
C:\manusbr-ai-clean\
├── package.json       # Dependências do projeto
├── server.js          # Servidor Express com API completa
└── README.md          # Este arquivo
```

## ✨ Funcionalidades

✅ **API REST completa** com Express
✅ **CORS habilitado** para chamadas do frontend
✅ **Dados mockados** para demonstração
✅ **Análise de rodadas** com probabilidades
✅ **Construção de escalações** com diferentes perfis
✅ **Listagem de times e jogadores**
✅ **Sistema de notícias**

## 🔧 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **CORS** - Middleware para CORS

## 📝 Notas

Esta é uma versão funcional simplificada do ManusBR-AI. Para a versão completa com:
- Scraping real de dados
- Banco de dados SQLite
- Módulos de IA avançados
- Jobs de cron
- Frontend React

Consulte a documentação completa na pasta raiz do projeto.

## 🎯 Próximos Passos

1. ✅ Servidor funcionando
2. Adicionar scraping de dados reais do Cartola FC
3. Implementar análise Poisson completa
4. Criar frontend React
5. Adicionar jobs de cron para coleta automática

---

**Status**: ✅ Funcionando
**Porta**: 3001
**Ambiente**: Development
