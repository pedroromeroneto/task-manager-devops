output "application_url" {
  description = "Endereço local da API Task Manager"
  value       = "http://localhost:3000"
}

output "container_name" {
  description = "Nome do container provisionado"
  value       = docker_container.task_manager.name
}
