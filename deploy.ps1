
$ErrorActionPreference = "Stop"

Write-Host "================================="
Write-Host " DEPLOY - TASK MANAGER"
Write-Host "================================="

Write-Host "`n[1/4] Baixando imagem mais recente..."
docker compose pull

if ($LASTEXITCODE -ne 0) {
    throw "Falha ao baixar a imagem Docker."
}

Write-Host "`n[2/4] Iniciando ou atualizando container..."
docker compose up -d

if ($LASTEXITCODE -ne 0) {
    throw "Falha ao iniciar o container."
}

Write-Host "`n[3/4] Aguardando inicializacao..."
Start-Sleep -Seconds 10

Write-Host "`n[4/4] Verificando saude da API..."

try {
    $response = Invoke-RestMethod `
        -Uri "http://localhost:3001/health" `
        -TimeoutSec 10

    Write-Host "`nDeploy realizado com sucesso!"
    Write-Host "Status da API: $($response.status)"
    Write-Host "Aplicacao: http://localhost:3001"
}
catch {
    Write-Host "`nERRO: A API nao respondeu corretamente."
    docker compose logs --tail 30
    exit 1
}
