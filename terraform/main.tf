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
  # Usa o Docker Engine local configurado na máquina.
}

resource "docker_image" "task_manager" {
  name = "task-manager-devops:1.0"

  build {
    context    = ".."
    dockerfile = "Dockerfile"
  }
}

resource "docker_container" "task_manager" {
  name  = "task-manager-devops"
  image = docker_image.task_manager.image_id

  ports {
    internal = 3000
    external = 3000
  }

  restart = "unless-stopped"
}
