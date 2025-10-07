const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, 'public')));

// Dados do Brasileirão 2025 - Série A
const mockTeams = [
  { id: '262', nome: 'Flamengo', sigla: 'FLA', cor: '#E31937' },
  { id: '275', nome: 'Palmeiras', sigla: 'PAL', cor: '#006437' },
  { id: '276', nome: 'Botafogo', sigla: 'BOT', cor: '#000000' },
  { id: '266', nome: 'Fluminense', sigla: 'FLU', cor: '#7A0E2E' },
  { id: '265', nome: 'Corinthians', sigla: 'COR', cor: '#000000' },
  { id: '263', nome: 'São Paulo', sigla: 'SAO', cor: '#E31E24' },
  { id: '269', nome: 'Atlético-MG', sigla: 'CAM', cor: '#000000' },
  { id: '271', nome: 'Grêmio', sigla: 'GRE', cor: '#0081C8' },
  { id: '272', nome: 'Internacional', sigla: 'INT', cor: '#D40000' },
  { id: '277', nome: 'Fortaleza', sigla: 'FOR', cor: '#1F3A93' },
  { id: '267', nome: 'Vasco', sigla: 'VAS', cor: '#000000' },
  { id: '273', nome: 'Athletico-PR', sigla: 'CAP', cor: '#E30613' },
  { id: '290', nome: 'Bragantino', sigla: 'RBB', cor: '#EE2831' },
  { id: '293', nome: 'Bahia', sigla: 'BAH', cor: '#0E4C92' },
  { id: '294', nome: 'Cruzeiro', sigla: 'CRU', cor: '#003D99' },
  { id: '285', nome: 'Atlético-GO', sigla: 'ACG', cor: '#E30613' },
  { id: '354', nome: 'Cuiabá', sigla: 'CUI', cor: '#FFB81C' },
  { id: '356', nome: 'Juventude', sigla: 'JUV', cor: '#006341' },
  { id: '373', nome: 'Criciúma', sigla: 'CRI', cor: '#FFD700' },
  { id: '315', nome: 'Vitória', sigla: 'VIT', cor: '#E30613' },
];

const mockPlayers = [
  // Flamengo
  { id: '101', nome: 'Rossi', apelido: 'Rossi', timeId: '262', pos: 'GOL', preco: 8.5, media: 5.8, status: 'provavel' },
  { id: '102', nome: 'Varela', apelido: 'Varela', timeId: '262', pos: 'LAT', preco: 7.2, media: 6.5, status: 'provavel' },
  { id: '103', nome: 'Léo Pereira', apelido: 'Léo Pereira', timeId: '262', pos: 'ZAG', preco: 6.8, media: 6.2, status: 'provavel' },
  { id: '104', nome: 'Ayrton Lucas', apelido: 'Ayrton Lucas', timeId: '262', pos: 'LAT', preco: 7.5, media: 6.8, status: 'provavel' },
  { id: '105', nome: 'Gerson', apelido: 'Gerson', timeId: '262', pos: 'MEI', preco: 11.2, media: 7.9, status: 'provavel' },
  { id: '106', nome: 'Arrascaeta', apelido: 'Arrascaeta', timeId: '262', pos: 'MEI', preco: 10.5, media: 7.5, status: 'provavel' },
  { id: '107', nome: 'Everton Cebolinha', apelido: 'Cebolinha', timeId: '262', pos: 'MEI', preco: 9.8, media: 7.2, status: 'duvida' },
  { id: '108', nome: 'Pedro', apelido: 'Pedro', timeId: '262', pos: 'ATA', preco: 14.5, media: 9.2, status: 'provavel' },
  { id: '109', nome: 'Gabigol', apelido: 'Gabigol', timeId: '262', pos: 'ATA', preco: 12.8, media: 8.5, status: 'provavel' },
  
  // Palmeiras
  { id: '201', nome: 'Weverton', apelido: 'Weverton', timeId: '275', pos: 'GOL', preco: 9.2, media: 6.5, status: 'provavel' },
  { id: '202', nome: 'Marcos Rocha', apelido: 'Marcos Rocha', timeId: '275', pos: 'LAT', preco: 6.5, media: 5.8, status: 'provavel' },
  { id: '203', nome: 'Gustavo Gómez', apelido: 'Gómez', timeId: '275', pos: 'ZAG', preco: 8.9, media: 7.2, status: 'provavel' },
  { id: '204', nome: 'Piquerez', apelido: 'Piquerez', timeId: '275', pos: 'LAT', preco: 7.8, media: 6.9, status: 'provavel' },
  { id: '205', nome: 'Zé Rafael', apelido: 'Zé Rafael', timeId: '275', pos: 'MEI', preco: 8.5, media: 7.1, status: 'provavel' },
  { id: '206', nome: 'Raphael Veiga', apelido: 'R. Veiga', timeId: '275', pos: 'MEI', preco: 13.2, media: 8.8, status: 'provavel' },
  { id: '207', nome: 'Estêvão', apelido: 'Estêvão', timeId: '275', pos: 'MEI', preco: 11.5, media: 8.2, status: 'provavel' },
  { id: '208', nome: 'Rony', apelido: 'Rony', timeId: '275', pos: 'ATA', preco: 9.2, media: 7.4, status: 'provavel' },
  { id: '209', nome: 'Flaco López', apelido: 'López', timeId: '275', pos: 'ATA', preco: 10.8, media: 8.1, status: 'provavel' },
  
  // Botafogo
  { id: '301', nome: 'John', apelido: 'John', timeId: '276', pos: 'GOL', preco: 7.8, media: 5.5, status: 'provavel' },
  { id: '302', nome: 'Marçal', apelido: 'Marçal', timeId: '276', pos: 'LAT', preco: 5.9, media: 5.2, status: 'provavel' },
  { id: '303', nome: 'Bastos', apelido: 'Bastos', timeId: '276', pos: 'ZAG', preco: 7.2, media: 6.5, status: 'provavel' },
  { id: '304', nome: 'Mateo Ponte', apelido: 'Ponte', timeId: '276', pos: 'LAT', preco: 6.8, media: 6.1, status: 'provavel' },
  { id: '305', nome: 'Marlon Freitas', apelido: 'M. Freitas', timeId: '276', pos: 'MEI', preco: 7.5, media: 6.8, status: 'provavel' },
  { id: '306', nome: 'Savarino', apelido: 'Savarino', timeId: '276', pos: 'MEI', preco: 10.2, media: 7.8, status: 'provavel' },
  { id: '307', nome: 'Luiz Henrique', apelido: 'L. Henrique', timeId: '276', pos: 'MEI', preco: 11.8, media: 8.4, status: 'provavel' },
  { id: '308', nome: 'Tiquinho Soares', apelido: 'Tiquinho', timeId: '276', pos: 'ATA', preco: 9.5, media: 7.6, status: 'provavel' },
  { id: '309', nome: 'Júnior Santos', apelido: 'Júnior S.', timeId: '276', pos: 'ATA', preco: 8.8, media: 7.2, status: 'provavel' },
  
  // Fluminense
  { id: '401', nome: 'Fábio', apelido: 'Fábio', timeId: '266', pos: 'GOL', preco: 8.8, media: 6.1, status: 'provavel' },
  { id: '402', nome: 'Samuel Xavier', apelido: 'S. Xavier', timeId: '266', pos: 'LAT', preco: 6.2, media: 5.5, status: 'provavel' },
  { id: '403', nome: 'Thiago Silva', apelido: 'Thiago Silva', timeId: '266', pos: 'ZAG', preco: 8.5, media: 7.0, status: 'provavel' },
  { id: '404', nome: 'Marcelo', apelido: 'Marcelo', timeId: '266', pos: 'LAT', preco: 7.0, media: 6.3, status: 'duvida' },
  { id: '405', nome: 'André', apelido: 'André', timeId: '266', pos: 'MEI', preco: 8.2, media: 6.9, status: 'provavel' },
  { id: '406', nome: 'Ganso', apelido: 'Ganso', timeId: '266', pos: 'MEI', preco: 9.5, media: 7.4, status: 'provavel' },
  { id: '407', nome: 'Arias', apelido: 'Arias', timeId: '266', pos: 'MEI', preco: 8.8, media: 7.1, status: 'provavel' },
  { id: '408', nome: 'Germán Cano', apelido: 'Cano', timeId: '266', pos: 'ATA', preco: 12.5, media: 8.6, status: 'provavel' },
  { id: '409', nome: 'Keno', apelido: 'Keno', timeId: '266', pos: 'ATA', preco: 7.8, media: 6.5, status: 'provavel' },
  
  // São Paulo
  { id: '501', nome: 'Rafael', apelido: 'Rafael', timeId: '263', pos: 'GOL', preco: 7.5, media: 5.2, status: 'provavel' },
  { id: '502', nome: 'Rafinha', apelido: 'Rafinha', timeId: '263', pos: 'LAT', preco: 6.8, media: 6.0, status: 'provavel' },
  { id: '503', nome: 'Arboleda', apelido: 'Arboleda', timeId: '263', pos: 'ZAG', preco: 7.2, media: 6.3, status: 'provavel' },
  { id: '504', nome: 'Welington', apelido: 'Welington', timeId: '263', pos: 'LAT', preco: 6.5, media: 5.8, status: 'provavel' },
  { id: '505', nome: 'Alisson', apelido: 'Alisson', timeId: '263', pos: 'MEI', preco: 7.8, media: 6.5, status: 'provavel' },
  { id: '506', nome: 'Lucas Moura', apelido: 'Lucas', timeId: '263', pos: 'MEI', preco: 10.5, media: 7.8, status: 'provavel' },
  { id: '507', nome: 'Luciano', apelido: 'Luciano', timeId: '263', pos: 'ATA', preco: 9.8, media: 7.5, status: 'provavel' },
  { id: '508', nome: 'Calleri', apelido: 'Calleri', timeId: '263', pos: 'ATA', preco: 11.2, media: 8.0, status: 'provavel' },
  
  // Corinthians
  { id: '601', nome: 'Cássio', apelido: 'Cássio', timeId: '265', pos: 'GOL', preco: 8.0, media: 5.5, status: 'provavel' },
  { id: '602', nome: 'Fagner', apelido: 'Fagner', timeId: '265', pos: 'LAT', preco: 6.5, media: 5.8, status: 'provavel' },
  { id: '603', nome: 'Gil', apelido: 'Gil', timeId: '265', pos: 'ZAG', preco: 6.8, media: 6.0, status: 'provavel' },
  { id: '604', nome: 'Fábio Santos', apelido: 'Fábio Santos', timeId: '265', pos: 'LAT', preco: 5.8, media: 5.2, status: 'provavel' },
  { id: '605', nome: 'Renato Augusto', apelido: 'R. Augusto', timeId: '265', pos: 'MEI', preco: 8.5, media: 7.0, status: 'duvida' },
  { id: '606', nome: 'Giuliano', apelido: 'Giuliano', timeId: '265', pos: 'MEI', preco: 7.8, media: 6.5, status: 'provavel' },
  { id: '607', nome: 'Yuri Alberto', apelido: 'Yuri Alberto', timeId: '265', pos: 'ATA', preco: 10.8, media: 8.2, status: 'provavel' },
  { id: '608', nome: 'Róger Guedes', apelido: 'Róger G.', timeId: '265', pos: 'ATA', preco: 9.2, media: 7.4, status: 'provavel' },
  
  // Atlético-MG
  { id: '701', nome: 'Everson', apelido: 'Everson', timeId: '269', pos: 'GOL', preco: 8.2, media: 5.9, status: 'provavel' },
  { id: '702', nome: 'Mariano', apelido: 'Mariano', timeId: '269', pos: 'LAT', preco: 6.0, media: 5.3, status: 'provavel' },
  { id: '703', nome: 'Bruno Fuchs', apelido: 'B. Fuchs', timeId: '269', pos: 'ZAG', preco: 6.5, media: 5.8, status: 'provavel' },
  { id: '704', nome: 'Guilherme Arana', apelido: 'Arana', timeId: '269', pos: 'LAT', preco: 8.5, media: 7.2, status: 'provavel' },
  { id: '705', nome: 'Otávio', apelido: 'Otávio', timeId: '269', pos: 'MEI', preco: 7.8, media: 6.5, status: 'provavel' },
  { id: '706', nome: 'Zaracho', apelido: 'Zaracho', timeId: '269', pos: 'MEI', preco: 8.2, media: 6.9, status: 'provavel' },
  { id: '707', nome: 'Hulk', apelido: 'Hulk', timeId: '269', pos: 'ATA', preco: 13.5, media: 9.1, status: 'provavel' },
  { id: '708', nome: 'Paulinho', apelido: 'Paulinho', timeId: '269', pos: 'ATA', preco: 10.5, media: 7.8, status: 'provavel' },
  
  // Grêmio
  { id: '801', nome: 'Rafael Cabral', apelido: 'Rafael', timeId: '271', pos: 'GOL', preco: 7.2, media: 5.0, status: 'provavel' },
  { id: '802', nome: 'João Pedro', apelido: 'João Pedro', timeId: '271', pos: 'LAT', preco: 6.2, media: 5.5, status: 'provavel' },
  { id: '803', nome: 'Kannemann', apelido: 'Kannemann', timeId: '271', pos: 'ZAG', preco: 6.8, media: 6.0, status: 'provavel' },
  { id: '804', nome: 'Reinaldo', apelido: 'Reinaldo', timeId: '271', pos: 'LAT', preco: 6.5, media: 5.8, status: 'provavel' },
  { id: '805', nome: 'Villasanti', apelido: 'Villasanti', timeId: '271', pos: 'MEI', preco: 7.5, media: 6.5, status: 'provavel' },
  { id: '806', nome: 'Cristaldo', apelido: 'Cristaldo', timeId: '271', pos: 'MEI', preco: 9.8, media: 7.6, status: 'provavel' },
  { id: '807', nome: 'Soteldo', apelido: 'Soteldo', timeId: '271', pos: 'ATA', preco: 10.2, media: 7.8, status: 'provavel' },
  { id: '808', nome: 'Diego Costa', apelido: 'Diego Costa', timeId: '271', pos: 'ATA', preco: 8.5, media: 6.9, status: 'lesionado' },
  
  // Internacional
  { id: '901', nome: 'Fabrício', apelido: 'Fabrício', timeId: '272', pos: 'GOL', preco: 7.8, media: 5.3, status: 'provavel' },
  { id: '902', nome: 'Bustos', apelido: 'Bustos', timeId: '272', pos: 'LAT', preco: 6.8, media: 6.0, status: 'provavel' },
  { id: '903', nome: 'Vitão', apelido: 'Vitão', timeId: '272', pos: 'ZAG', preco: 6.5, media: 5.8, status: 'provavel' },
  { id: '904', nome: 'Renê', apelido: 'Renê', timeId: '272', pos: 'LAT', preco: 6.2, media: 5.5, status: 'provavel' },
  { id: '905', nome: 'Bruno Henrique', apelido: 'Bruno H.', timeId: '272', pos: 'MEI', preco: 7.2, media: 6.3, status: 'provavel' },
  { id: '906', nome: 'Alan Patrick', apelido: 'Alan Patrick', timeId: '272', pos: 'MEI', preco: 10.5, media: 7.9, status: 'provavel' },
  { id: '907', nome: 'Wesley', apelido: 'Wesley', timeId: '272', pos: 'MEI', preco: 8.8, media: 7.2, status: 'provavel' },
  { id: '908', nome: 'Enner Valencia', apelido: 'Valencia', timeId: '272', pos: 'ATA', preco: 11.5, media: 8.3, status: 'provavel' },
  
  // Fortaleza
  { id: '1001', nome: 'João Ricardo', apelido: 'João Ricardo', timeId: '277', pos: 'GOL', preco: 7.5, media: 5.2, status: 'provavel' },
  { id: '1002', nome: 'Tinga', apelido: 'Tinga', timeId: '277', pos: 'LAT', preco: 6.5, media: 5.8, status: 'provavel' },
  { id: '1003', nome: 'Titi', apelido: 'Titi', timeId: '277', pos: 'ZAG', preco: 6.8, media: 6.0, status: 'provavel' },
  { id: '1004', nome: 'Bruno Pacheco', apelido: 'B. Pacheco', timeId: '277', pos: 'LAT', preco: 6.2, media: 5.5, status: 'provavel' },
  { id: '1005', nome: 'Lucas Sasha', apelido: 'Sasha', timeId: '277', pos: 'MEI', preco: 7.5, media: 6.5, status: 'provavel' },
  { id: '1006', nome: 'Pochettino', apelido: 'Pochettino', timeId: '277', pos: 'MEI', preco: 8.8, media: 7.2, status: 'provavel' },
  { id: '1007', nome: 'Pikachu', apelido: 'Pikachu', timeId: '277', pos: 'MEI', preco: 7.2, media: 6.3, status: 'provavel' },
  { id: '1008', nome: 'Juan Lucero', apelido: 'Lucero', timeId: '277', pos: 'ATA', preco: 10.2, media: 7.8, status: 'provavel' },
  
  // Vasco
  { id: '1101', nome: 'Léo Jardim', apelido: 'Léo Jardim', timeId: '267', pos: 'GOL', preco: 7.0, media: 5.0, status: 'provavel' },
  { id: '1102', nome: 'Puma Rodríguez', apelido: 'Puma', timeId: '267', pos: 'LAT', preco: 6.8, media: 6.2, status: 'provavel' },
  { id: '1103', nome: 'Léo', apelido: 'Léo', timeId: '267', pos: 'ZAG', preco: 6.2, media: 5.5, status: 'provavel' },
  { id: '1104', nome: 'Lucas Piton', apelido: 'Piton', timeId: '267', pos: 'LAT', preco: 6.5, media: 5.8, status: 'provavel' },
  { id: '1105', nome: 'Hugo Moura', apelido: 'Hugo Moura', timeId: '267', pos: 'MEI', preco: 7.2, media: 6.2, status: 'provavel' },
  { id: '1106', nome: 'Payet', apelido: 'Payet', timeId: '267', pos: 'MEI', preco: 10.8, media: 7.9, status: 'provavel' },
  { id: '1107', nome: 'Vegetti', apelido: 'Vegetti', timeId: '267', pos: 'ATA', preco: 11.5, media: 8.5, status: 'provavel' },
  
  // Bahia
  { id: '1201', nome: 'Marcos Felipe', apelido: 'Marcos F.', timeId: '293', pos: 'GOL', preco: 7.2, media: 5.1, status: 'provavel' },
  { id: '1202', nome: 'Gilberto', apelido: 'Gilberto', timeId: '293', pos: 'LAT', preco: 6.0, media: 5.3, status: 'provavel' },
  { id: '1203', nome: 'Gabriel Xavier', apelido: 'G. Xavier', timeId: '293', pos: 'ZAG', preco: 6.5, media: 5.8, status: 'provavel' },
  { id: '1204', nome: 'Everaldo', apelido: 'Everaldo', timeId: '293', pos: 'ATA', preco: 9.2, media: 7.3, status: 'provavel' },
  { id: '1205', nome: 'Thaciano', apelido: 'Thaciano', timeId: '293', pos: 'MEI', preco: 8.5, media: 7.0, status: 'provavel' },
  
  // Cruzeiro
  { id: '1301', nome: 'Rafael Cabral', apelido: 'Rafael C.', timeId: '294', pos: 'GOL', preco: 7.5, media: 5.2, status: 'provavel' },
  { id: '1302', nome: 'William', apelido: 'William', timeId: '294', pos: 'LAT', preco: 6.5, media: 5.8, status: 'provavel' },
  { id: '1303', nome: 'Luciano Castán', apelido: 'Castán', timeId: '294', pos: 'ZAG', preco: 6.0, media: 5.4, status: 'provavel' },
  { id: '1304', nome: 'Matheus Pereira', apelido: 'M. Pereira', timeId: '294', pos: 'MEI', preco: 11.2, media: 8.2, status: 'provavel' },
  { id: '1305', nome: 'Matheus Henrique', apelido: 'M. Henrique', timeId: '294', pos: 'ATA', preco: 9.8, media: 7.5, status: 'provavel' },
];

const mockFixtures = [
  // Rodada 28 - 2025
  { id: '2801', rodada: 28, homeId: '262', awayId: '276', dataISO: '2025-10-10T19:00:00Z', status: 'agendada', venue: 'Maracanã' },
  { id: '2802', rodada: 28, homeId: '275', awayId: '263', dataISO: '2025-10-10T21:30:00Z', status: 'agendada', venue: 'Allianz Parque' },
  { id: '2803', rodada: 28, homeId: '266', awayId: '265', dataISO: '2025-10-11T16:00:00Z', status: 'agendada', venue: 'Maracanã' },
  { id: '2804', rodada: 28, homeId: '269', awayId: '271', dataISO: '2025-10-11T18:30:00Z', status: 'agendada', venue: 'Mineirão' },
  { id: '2805', rodada: 28, homeId: '277', awayId: '272', dataISO: '2025-10-11T20:00:00Z', status: 'agendada', venue: 'Castelão' },
  { id: '2806', rodada: 28, homeId: '267', awayId: '273', dataISO: '2025-10-12T16:00:00Z', status: 'agendada', venue: 'São Januário' },
  { id: '2807', rodada: 28, homeId: '290', awayId: '293', dataISO: '2025-10-12T18:30:00Z', status: 'agendada', venue: 'Nabi Abi Chedid' },
  { id: '2808', rodada: 28, homeId: '294', awayId: '285', dataISO: '2025-10-12T20:00:00Z', status: 'agendada', venue: 'Mineirão' },
  { id: '2809', rodada: 28, homeId: '354', awayId: '356', dataISO: '2025-10-13T16:00:00Z', status: 'agendada', venue: 'Arena Pantanal' },
  { id: '2810', rodada: 28, homeId: '373', awayId: '315', dataISO: '2025-10-13T18:30:00Z', status: 'agendada', venue: 'Heriberto Hülse' },
];

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
