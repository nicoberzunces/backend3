Este proyecto es una aplicación de gestión de usuarios y mascotas que permite a los usuarios registrar, administrar y adoptar mascotas. Utiliza MongoDB como base de datos, Node.js con Express para el backend, y está dockerizado para facilitar el despliegue.

## Descripción

- **Usuarios**: Gestión de usuarios con roles de 'user' o 'admin'.
- **Mascotas**: Cada mascota está asociada a un usuario (dueño).
- **Mock Data**: Generación de usuarios y mascotas simulados para pruebas.
- **API RESTful**: Endpoints para CRUD de usuarios y mascotas.

## Requisitos

- Node.js v18.20.2
- MongoDB (usado en la conexión a la base de datos)
- Docker (para contenedorización)

## Instalación

1. Clona el repositorio:
   ```sh
   git clone [https://github.com/nicoberzunces/backend3]
   cd pet-user-management

**Imagen de Docker disponible en [Docker Hub](https://hub.docker.com/r/nicoberzunces02/tu-proyecto)**