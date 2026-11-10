
terraform {
  required_version = ">= 1.5.0"

  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {
  host = "npipe:////./pipe/dockerDesktopLinuxEngine"
}

# Utiliza a imagem que já foi construída no Docker
data "docker_image" "task_manager" {
  name = "task-manager-devops:1.0"
}

# Cria o container da aplicação
resource "docker_container" "task_manager" {
  name  = "task-manager-devops"
  image = data.docker_image.task_manager.id

  ports {
    internal = 3000
    external = 3000
  }

  restart = "unless-stopped"
}
