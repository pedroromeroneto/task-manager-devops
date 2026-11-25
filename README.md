# \# Task Manager — Projeto DevOps

# 

# API REST para gerenciamento de tarefas, desenvolvida como projeto acadêmico da disciplina DevOps.

# 

# \## Tecnologias utilizadas

# 

# \- Node.js 20

# \- Express

# \- Jest e Supertest

# \- GitHub Actions

# \- Docker

# \- Docker Compose

# \- GitHub Container Registry (GHCR)

# \- Terraform

# 

# \## Funcionalidades da API

# 

# \- `GET /health` — verifica a saúde da aplicação.

# \- `GET /tasks` — lista as tarefas.

# \- `POST /tasks` — cadastra uma tarefa.

# \- `PATCH /tasks/:id` — atualiza uma tarefa.

# \- `DELETE /tasks/:id` — exclui uma tarefa.

# 

# \## Fase 1 — Integração Contínua e Infraestrutura

# 

# \- Configuração do repositório Git.

# \- Pipeline de CI com GitHub Actions.

# \- Build e testes automatizados.

# \- Containerização com Docker.

# \- Provisionamento do container com Terraform.

# 

# \## Fase 2 — Entrega Contínua e Deploy

# 

# \- Expansão do GitHub Actions para CI/CD.

# \- Construção e publicação automática da imagem Docker no GHCR após aprovação dos testes.

# \- Gerenciamento do container com Docker Compose.

# \- Script PowerShell para automatizar o deploy.

# \- Healthcheck para monitoramento da disponibilidade da API.

# 

# \## Executar localmente com Docker Compose

# 

# Requisitos: Docker Desktop e Docker Compose.

# 

# ```powershell

# docker compose pull

# docker compose up -d

# ```

# 

# A aplicação ficará disponível em:

# 

# http://localhost:3001

# 

# Verificar o estado do container:

# 

# ```powershell

# docker compose ps

# ```

# 

# Consultar os logs:

# 

# ```powershell

# docker compose logs --tail 20

# ```

# 

# \## Executar o deploy automatizado

# 

# No PowerShell, execute:

# 

# ```powershell

# .\\deploy.ps1

# ```

# 

# O script baixa a imagem mais recente do GHCR, atualiza o container e verifica a saúde da API.

# 

# \## Executar testes

# 

# Instalar dependências:

# 

# ```powershell

# npm ci

# ```

# 

# Executar build:

# 

# ```powershell

# npm run build

# ```

# 

# Executar testes:

# 

# ```powershell

# npm test

# ```

# 

# \## Limitações conhecidas

# 

# \- Os dados das tarefas são armazenados em memória e são perdidos quando o container é recriado.

# \- O deploy é executado manualmente na máquina local por meio do script PowerShell.

# \- A aplicação utiliza um único serviço de container, sem orquestração distribuída.

# 

# \## Repositório

# 

# https://github.com/pedroromeroneto/task-manager-devops

# 

# \## Imagem Docker

# 

# ghcr.io/pedroromeroneto/task-manager-devops:latest

