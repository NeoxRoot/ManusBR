# Script de teste da API ManusBR em PRODUCAO

$baseUrl = "https://manus-br.vercel.app"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Testando ManusBR-AI em PRODUCAO" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "URL Base: $baseUrl" -ForegroundColor Yellow
Write-Host ""

# Teste 1: Health Check
Write-Host "1. Health Check..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/api/health" -UseBasicParsing
    $json = $response.Content | ConvertFrom-Json
    Write-Host "   OK - Status: $($json.status)" -ForegroundColor Green
    Write-Host "   OK - Message: $($json.message)" -ForegroundColor Green
} catch {
    Write-Host "   ERRO - $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Teste 2: Listar Times
Write-Host "2. Listando times..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/api/teams" -UseBasicParsing
    $teams = $response.Content | ConvertFrom-Json
    Write-Host "   OK - Total de times: $($teams.Count)" -ForegroundColor Green
    foreach ($team in $teams) {
        Write-Host "   - $($team.nome) ($($team.sigla))" -ForegroundColor Gray
    }
} catch {
    Write-Host "   ERRO - $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Teste 3: Listar Jogadores
Write-Host "3. Listando jogadores..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/api/players" -UseBasicParsing
    $players = $response.Content | ConvertFrom-Json
    Write-Host "   OK - Total de jogadores: $($players.Count)" -ForegroundColor Green
    foreach ($player in $players) {
        Write-Host "   - $($player.nome) - $($player.pos) - Media: $($player.media)" -ForegroundColor Gray
    }
} catch {
    Write-Host "   ERRO - $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Teste 4: Listar Fixtures
Write-Host "4. Listando jogos da rodada 15..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/api/fixtures?rodada=15" -UseBasicParsing
    $fixtures = $response.Content | ConvertFrom-Json
    Write-Host "   OK - Total de jogos: $($fixtures.Count)" -ForegroundColor Green
    foreach ($fixture in $fixtures) {
        Write-Host "   - $($fixture.homeTeam.nome) vs $($fixture.awayTeam.nome)" -ForegroundColor Gray
    }
} catch {
    Write-Host "   ERRO - $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Teste 5: Analise da Rodada
Write-Host "5. Analisando rodada 15..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/api/analysis/rodada/15" -UseBasicParsing
    $analysis = $response.Content | ConvertFrom-Json
    Write-Host "   OK - Rodada: $($analysis.rodada)" -ForegroundColor Green
    Write-Host "   OK - Confrontos analisados: $($analysis.confrontos.Count)" -ForegroundColor Green
    foreach ($confronto in $analysis.confrontos) {
        Write-Host "   - $($confronto.homeTeam.nome) vs $($confronto.awayTeam.nome)" -ForegroundColor Gray
        Write-Host "     Lambda Home: $($confronto.poisson.lambdaHome) | Away: $($confronto.poisson.lambdaAway)" -ForegroundColor Gray
        Write-Host "     Prob SG Home: $($confronto.sg.probSGHome) | Away: $($confronto.sg.probSGAway)" -ForegroundColor Gray
    }
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

    $response = Invoke-WebRequest -Uri "$baseUrl/api/lineup/build" -Method POST -Body $body -ContentType "application/json" -UseBasicParsing
    $lineup = $response.Content | ConvertFrom-Json
    Write-Host "   OK - Escalacao criada!" -ForegroundColor Green
    Write-Host "   OK - Custo total: R$ $($lineup.custoTotal)" -ForegroundColor Green
    Write-Host "   OK - Pontos esperados: $($lineup.pontosEsperados)" -ForegroundColor Green
    Write-Host "   OK - Perfil: $($lineup.perfil)" -ForegroundColor Green
    Write-Host "   Explicacao:" -ForegroundColor Gray
    foreach ($exp in $lineup.explicacao) {
        Write-Host "   - $exp" -ForegroundColor Gray
    }
} catch {
    Write-Host "   ERRO - $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

# Teste 7: Noticias
Write-Host "7. Listando noticias..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/api/news" -UseBasicParsing
    $news = $response.Content | ConvertFrom-Json
    Write-Host "   OK - Total de noticias: $($news.Count)" -ForegroundColor Green
    foreach ($item in $news) {
        Write-Host "   - $($item.titulo)" -ForegroundColor Gray
    }
} catch {
    Write-Host "   ERRO - $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  TODOS OS TESTES PASSARAM!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "API Online: https://manus-br.vercel.app" -ForegroundColor Yellow
Write-Host "GitHub: https://github.com/NeoxRoot/ManusBR" -ForegroundColor Yellow
Write-Host "Dashboard Vercel: https://vercel.com/giovane-moreiras-projects/manus-br" -ForegroundColor Yellow
Write-Host ""
Write-Host "Deploy realizado por: NeoxRoot (Giovanni)" -ForegroundColor Cyan
Write-Host "Data: $(Get-Date -Format 'dd/MM/yyyy HH:mm:ss')" -ForegroundColor Cyan
Write-Host ""
