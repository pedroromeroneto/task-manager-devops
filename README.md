# Task Manager - Projeto DevOps

API REST simples para cadastro e gerenciamento de tarefas, desenvolvida como projeto acadêmico da disciplina DevOps na Prática.

## Tecnologias

- Node.js 20
- JavaScript e Express
- Jest e Supertest para testes automatizados
- GitHub Actions para integração contínua
- Docker para empacotamento da aplicação
- Terraform com provider Docker para provisionamento local do container

## Requisitos

- Node.js 20 ou superior
- npm
- Git
- Docker Engine/Desktop em execução
- Terraform 1.5 ou superior (para a etapa de infraestrutura)

## Executar localmente

```bash
npm install
npm start
```

A API ficará disponível em `http://localhost:3000`.

## Endpoints

| Método | Rota | Descrição |
|---|---|---|
| GET | `/health` | Verifica a saúde da API |
| GET | `/tasks` | Lista tarefas |
| POST | `/tasks` | Cria uma tarefa (`{"title":"Estudar DevOps"}`) |
| PATCH | `/tasks/:id` | Atualiza título e/ou status |
| DELETE | `/tasks/:id` | Exclui uma tarefa |

## Testes e build

```bash
npm test
npm run build
```

## Infraestrutura local com Terraform

Com o Docker em execução:

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

Para remover os recursos criados:

```bash
terraform destroy
```

A aplicação provisionada ficará disponível em `http://localhost:3000`.

## Integração contínua

O workflow `.github/workflows/ci.yml` executa em pushes e pull requests direcionados à branch `main`. Ele instala as dependências, verifica a sintaxe e executa os testes automatizados.

## Observação

Esta primeira versão armazena tarefas em memória. Os dados são reiniciados quando o processo/container é reiniciado. O objetivo é demonstrar o fluxo de desenvolvimento, testes, CI e provisionamento local, não oferecer armazenamento persistente para produção.
