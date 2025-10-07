# Script de teste da API ManusBR-AI

Write-Host "Testando ManusBR-AI API..." -ForegroundColor Cyan
Write-Host ""

# Teste 1: Health Check
Write-Host "1. Health Check..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3001/api/health" -UseBasicParsing
    Write-Host "   OK - Status: 200" -ForegroundColor Green
} catch {
    Write-Host "   ERRO - $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Teste 2: Listar Times
Write-Host "2. Listando times..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3001/api/teams" -UseBasicParsing
    $teams = $response.Content | ConvertFrom-Json
    Write-Host "   OK - Total de times: $($teams.Count)" -ForegroundColor Green
} catch {
    Write-Host "   ERRO - $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Teste 3: Listar Jogadores
Write-Host "3. Listando jogadores..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3001/api/players" -UseBasicParsing
    $players = $response.Content | ConvertFrom-Json
    Write-Host "   OK - Total de jogadores: $($players.Count)" -ForegroundColor Green
} catch {
    Write-Host "   ERRO - $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Teste 4: Listar Fixtures
Write-Host "4. Listando jogos da rodada 15..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3001/api/fixtures?rodada=15" -UseBasicParsing
    $fixtures = $response.Content | ConvertFrom-Json
    Write-Host "   OK - Total de jogos: $($fixtures.Count)" -ForegroundColor Green
} catch {
    Write-Host "   ERRO - $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Teste 5: Analise da Rodada
Write-Host "5. Analisando rodada 15..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3001/api/analysis/rodada/15" -UseBasicParsing
    $analysis = $response.Content | ConvertFrom-Json
    Write-Host "   OK - Rodada: $($analysis.rodada)" -ForegroundColor Green
    Write-Host "   OK - Confrontos analisados: $($analysis.confrontos.Count)" -ForegroundColor Green
} catch {
    Write-Host "   ERRO - $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Teste 6: Construir Escalacao
Write-Host "6. Construindo escalacao..." -ForegroundColor Yellow
try {
    $body = @{
        rodada = 15
        perfil = "seguro"
        orcamento = 120
        maxPorTime = 3
    } | ConvertTo-Json

    $response = Invoke-WebRequest -Uri "http://localhost:3001/api/lineup/build" -Method POST -Body $body -ContentType "application/json" -UseBasicParsing
    $lineup = $response.Content | ConvertFrom-Json
    Write-Host "   OK - Escalacao criada!" -ForegroundColor Green
    Write-Host "   OK - Custo total: R$ $($lineup.custoTotal)" -ForegroundColor Green
    Write-Host "   OK - Pontos esperados: $($lineup.pontosEsperados)" -ForegroundColor Green
} catch {
    Write-Host "   ERRO - $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Teste 7: Noticias
Write-Host "7. Listando noticias..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3001/api/news" -UseBasicParsing
    $news = $response.Content | ConvertFrom-Json
    Write-Host "   OK - Total de noticias: $($news.Count)" -ForegroundColor Green
} catch {
    Write-Host "   ERRO - $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

Write-Host "Todos os testes concluidos!" -ForegroundColor Cyan
Write-Host ""
Write-Host "Servidor disponivel em: http://localhost:3001" -ForegroundColor Yellow
Write-Host "Documentacao: http://localhost:3001/api/test" -ForegroundColor Yellow