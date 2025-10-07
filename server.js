const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Dados mockados para demonstração
const mockTeams = [
  { id: '1', nome: 'Flamengo', sigla: 'FLA', cor: '#FF0000' },
  { id: '2', nome: 'Palmeiras', sigla: 'PAL', cor: '#00FF00' },
  { id: '3', nome: 'São Paulo', sigla: 'SAO', cor: '#0000FF' },
  { id: '4', nome: 'Santos', sigla: 'SAN', cor: '#FFFF00' },
  { id: '5', nome: 'Corinthians', sigla: 'COR', cor: '#000000' },
];

const mockPlayers = [
  { id: '1', nome: 'Gabriel Jesus', timeId: '1', pos: 'ATA', preco: 15.5, media: 8.2 },
  { id: '2', nome: 'Pedro', timeId: '1', pos: 'ATA', preco: 12.3, media: 7.8 },
  { id: '3', nome: 'Bruno Henrique', timeId: '1', pos: 'MEI', preco: 10.1, media: 7.5 },
  { id: '4', nome: 'Rony', timeId: '2', pos: 'ATA', preco: 8.9, media: 7.2 },
  { id: '5', nome: 'Dudu', timeId: '2', pos: 'MEI', preco: 9.5, media: 7.0 },
];

const mockFixtures = [
  { id: '1', rodada: 15, homeId: '1', awayId: '2', dataISO: '2024-01-15T16:00:00Z', status: 'agendada' },
  { id: '2', rodada: 15, homeId: '3', awayId: '4', dataISO: '2024-01-15T18:30:00Z', status: 'agendada' },
];

// Rota raiz
app.get('/', (req, res) => {
  res.json({
    name: 'ManusBR-AI',
    version: '1.0.0',
    description: 'IA para análise de futebol brasileiro e recomendações de escalação',
    status: 'online',
    endpoints: {
      health: '/api/health',
      documentation: '/api/test',
      teams: '/api/teams',
      players: '/api/players',
      fixtures: '/api/fixtures',
      analysis: '/api/analysis/rodada/:rodada',
      lineup: '/api/lineup/build',
      news: '/api/news'
    },
    github: 'https://github.com/NeoxRoot/ManusBR',
    author: 'NeoxRoot'
  });
});

// Rotas da API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    message: 'ManusBR-AI API funcionando!',
    version: '1.0.0'
  });
});

app.get('/api/teams', (req, res) => {
  res.json(mockTeams);
});

app.get('/api/players', (req, res) => {
  const { pos, timeId } = req.query;
  let players = mockPlayers;
  
  if (pos) {
    players = players.filter(p => p.pos === pos);
  }
  
  if (timeId) {
    players = players.filter(p => p.timeId === timeId);
  }
  
  res.json(players);
});

app.get('/api/fixtures', (req, res) => {
  const { rodada } = req.query;
  let fixtures = mockFixtures;
  
  if (rodada) {
    fixtures = fixtures.filter(f => f.rodada === parseInt(rodada));
  }
  
  // Adicionar informações dos times
  const fixturesWithTeams = fixtures.map(fixture => ({
    ...fixture,
    homeTeam: mockTeams.find(t => t.id === fixture.homeId),
    awayTeam: mockTeams.find(t => t.id === fixture.awayId)
  }));
  
  res.json(fixturesWithTeams);
});

app.get('/api/analysis/rodada/:rodada', (req, res) => {
  const { rodada } = req.params;
  
  // Análise mockada
  const analysis = {
    rodada: parseInt(rodada),
    confrontos: mockFixtures.map(fixture => ({
      fixtureId: fixture.id,
      homeTeam: {
        id: fixture.homeId,
        nome: mockTeams.find(t => t.id === fixture.homeId)?.nome,
        features: {
          forma: 0.7,
          ataqueBase: 1.5,
          defesaBase: 1.2
        }
      },
      awayTeam: {
        id: fixture.awayId,
        nome: mockTeams.find(t => t.id === fixture.awayId)?.nome,
        features: {
          forma: 0.6,
          ataqueBase: 1.3,
          defesaBase: 1.4
        }
      },
      poisson: {
        lambdaHome: 1.8,
        lambdaAway: 1.2,
        probSGHome: 0.45,
        probSGAway: 0.25
      },
      sg: {
        probSGHome: 0.45,
        probSGAway: 0.25,
        probEmpate: 0.30,
        confidence: 0.8
      }
    })),
    rankings: {
      GOL: mockPlayers.filter(p => p.pos === 'GOL').map(p => ({ playerId: p.id, pontosEsperados: 6.5 })),
      LAT: mockPlayers.filter(p => p.pos === 'LAT').map(p => ({ playerId: p.id, pontosEsperados: 7.2 })),
      ZAG: mockPlayers.filter(p => p.pos === 'ZAG').map(p => ({ playerId: p.id, pontosEsperados: 6.8 })),
      MEI: mockPlayers.filter(p => p.pos === 'MEI').map(p => ({ playerId: p.id, pontosEsperados: 8.1 })),
      ATA: mockPlayers.filter(p => p.pos === 'ATA').map(p => ({ playerId: p.id, pontosEsperados: 8.5 }))
    },
    generatedAt: new Date().toISOString()
  };
  
  res.json(analysis);
});

app.post('/api/lineup/build', (req, res) => {
  const { rodada, perfil, orcamento = 120, maxPorTime = 3 } = req.body;
  
  // Escalação mockada
  const lineup = {
    gk: mockPlayers.find(p => p.pos === 'GOL') || mockPlayers[0],
    defs: mockPlayers.filter(p => p.pos === 'LAT' || p.pos === 'ZAG').slice(0, 4),
    meds: mockPlayers.filter(p => p.pos === 'MEI').slice(0, 3),
    fwds: mockPlayers.filter(p => p.pos === 'ATA').slice(0, 3),
    explicacao: [
      `Escalação ${perfil} para a ${rodada}ª rodada`,
      'Defesa: Escolhida por consistência defensiva',
      'Meio-campo: Balanceamento entre segurança e criatividade',
      'Ataque: Foco em jogadores com maior potencial ofensivo'
    ],
    custoTotal: 95.5,
    pontosEsperados: 78.2,
    rodada: rodada,
    perfil: perfil,
    generatedAt: new Date().toISOString()
  };
  
  res.json(lineup);
});

app.get('/api/news', (req, res) => {
  const mockNews = [
    {
      id: '1',
      titulo: 'Flamengo vence o Corinthians por 2x1',
      link: 'https://example.com/news1',
      dataISO: new Date().toISOString(),
      fonte: 'ge',
      categoria: 'brasileirao'
    },
    {
      id: '2',
      titulo: 'Palmeiras contrata novo jogador',
      link: 'https://example.com/news2',
      dataISO: new Date().toISOString(),
      fonte: 'newsapi',
      categoria: 'transfers'
    }
  ];
  
  res.json(mockNews);
});

// Rota de teste
app.get('/api/test', (req, res) => {
  res.json({
    message: 'ManusBR-AI API funcionando perfeitamente!',
    timestamp: new Date().toISOString(),
    endpoints: [
      'GET /api/health - Status da API',
      'GET /api/teams - Lista de times',
      'GET /api/players - Lista de jogadores',
      'GET /api/fixtures - Lista de jogos',
      'GET /api/analysis/rodada/:rodada - Análise da rodada',
      'POST /api/lineup/build - Construir escalação',
      'GET /api/news - Lista de notícias'
    ]
  });
});

// Middleware para rotas não encontradas
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Rota não encontrada',
    path: req.originalUrl,
    method: req.method,
    availableEndpoints: [
      '/api/health',
      '/api/test',
      '/api/teams',
      '/api/players',
      '/api/fixtures',
      '/api/analysis/rodada/:rodada',
      '/api/lineup/build',
      '/api/news'
    ]
  });
});

// Iniciar servidor (apenas para desenvolvimento local)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 ManusBR-AI API rodando na porta ${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
    console.log(`🧪 Teste: http://localhost:${PORT}/api/test`);
    console.log(`⚽ Times: http://localhost:${PORT}/api/teams`);
    console.log(`👥 Jogadores: http://localhost:${PORT}/api/players`);
    console.log(`📅 Jogos: http://localhost:${PORT}/api/fixtures`);
    console.log(`📈 Análise: http://localhost:${PORT}/api/analysis/rodada/15`);
    console.log(`🎯 Escalação: POST http://localhost:${PORT}/api/lineup/build`);
    console.log(`📰 Notícias: http://localhost:${PORT}/api/news`);
  });
}

// Exportar para Vercel
module.exports = app;
