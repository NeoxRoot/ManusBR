# Script para Deploy no GitHub e Vercel

param(
    [string]$githubUsername = "",
    [string]$commitMessage = "Update ManusBR-AI"
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ManusBR-AI - Deploy Helper" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se está no diretório correto
if (-not (Test-Path "server.js")) {
    Write-Host "ERRO: Execute este script no diretorio C:\manusbr-ai-clean\" -ForegroundColor Red
    exit 1
}

# Menu
Write-Host "Escolha uma opcao:" -ForegroundColor Yellow
Write-Host "1. Configurar Git pela primeira vez" -ForegroundColor White
Write-Host "2. Conectar ao GitHub (primeira vez)" -ForegroundColor White
Write-Host "3. Fazer commit e push" -ForegroundColor White
Write-Host "4. Instalar Vercel CLI e fazer deploy" -ForegroundColor White
Write-Host "5. Ver status do Git" -ForegroundColor White
Write-Host "0. Sair" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Digite o numero da opcao"

switch ($choice) {
    "1" {
        Write-Host "`nConfigurando Git..." -ForegroundColor Yellow
        $email = Read-Host "Digite seu email do GitHub"
        $nome = Read-Host "Digite seu nome"
        
        git config --global user.email $email
        git config --global user.name $nome
        
        Write-Host "Git configurado com sucesso!" -ForegroundColor Green
    }
    
    "2" {
        Write-Host "`nConectando ao GitHub..." -ForegroundColor Yellow
        
        if ($githubUsername -eq "") {
            $githubUsername = Read-Host "Digite seu usuario do GitHub"
        }
        
        $repoUrl = "https://github.com/$githubUsername/manusbr-ai.git"
        
        Write-Host "`nRemovendo origin anterior (se existir)..." -ForegroundColor Gray
        git remote remove origin 2>$null
        
        Write-Host "Adicionando novo origin: $repoUrl" -ForegroundColor Gray
        git remote add origin $repoUrl
        
        Write-Host "Renomeando branch para main..." -ForegroundColor Gray
        git branch -M main
        
        Write-Host "`nFazendo push inicial..." -ForegroundColor Yellow
        Write-Host "NOTA: Voce precisara fazer login no GitHub!" -ForegroundColor Cyan
        git push -u origin main
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "`nRepositorio conectado com sucesso!" -ForegroundColor Green
            Write-Host "URL: https://github.com/$githubUsername/manusbr-ai" -ForegroundColor Cyan
        } else {
            Write-Host "`nErro ao conectar. Verifique:" -ForegroundColor Red
            Write-Host "1. O repositorio existe no GitHub?" -ForegroundColor Yellow
            Write-Host "2. Voce tem permissao de acesso?" -ForegroundColor Yellow
        }
    }
    
    "3" {
        Write-Host "`nFazendo commit e push..." -ForegroundColor Yellow
        
        git add .
        
        if ($commitMessage -eq "Update ManusBR-AI") {
            $commitMessage = Read-Host "Digite a mensagem do commit (ou Enter para usar padrao)"
            if ($commitMessage -eq "") {
                $commitMessage = "Update ManusBR-AI - $(Get-Date -Format 'dd/MM/yyyy HH:mm')"
            }
        }
        
        git commit -m $commitMessage
        git push
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "`nCommit e push realizados com sucesso!" -ForegroundColor Green
        }
    }
    
    "4" {
        Write-Host "`nInstalando Vercel CLI..." -ForegroundColor Yellow
        npm install -g vercel
        
        Write-Host "`nFazendo login no Vercel..." -ForegroundColor Yellow
        Write-Host "Um navegador sera aberto para autenticacao..." -ForegroundColor Cyan
        vercel login
        
        Write-Host "`nIniciando deploy..." -ForegroundColor Yellow
        vercel
        
        $deployProd = Read-Host "`nDeseja fazer deploy para producao? (s/n)"
        if ($deployProd -eq "s") {
            Write-Host "Fazendo deploy em producao..." -ForegroundColor Yellow
            vercel --prod
        }
        
        Write-Host "`nDeploy concluido!" -ForegroundColor Green
    }
    
    "5" {
        Write-Host "`nStatus do Git:" -ForegroundColor Yellow
        git status
        Write-Host "`nRemote configurado:" -ForegroundColor Yellow
        git remote -v
        Write-Host "`nUltimos commits:" -ForegroundColor Yellow
        git log --oneline -5
    }
    
    "0" {
        Write-Host "Saindo..." -ForegroundColor Gray
        exit 0
    }
    
    default {
        Write-Host "Opcao invalida!" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Pressione qualquer tecla para continuar..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
