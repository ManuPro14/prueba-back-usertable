```markdown
# Prueba Técnica - Sistema de Gestión de Usuarios

Aplicación Full Stack con NestJS (Backend), React (Frontend) y PostgreSQL (Docker).  
Incluye autenticación JWT, CRUD de usuarios y despliegue local con Docker.

![Demo](https://i.imgur.com/5XGJh3P.png)

## 🚀 Requisitos Previos

- [Node.js v18+](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)

## 📦 Estructura del Proyecto
```

prueba-back-usertable/
├── backend/ # NestJS (API REST)
├── frontend/ # React (Interfaz web)
└── docker-compose.yml # Configuración de PostgreSQL

````

## 🛠️ Configuración Inicial

### 1. Clonar el Repositorio
```bash
git clone https://github.com/ManuPro14/prueba-back-usertable
cd prueba-back-usertable
````

### 2. Configurar Variables de Entorno

**Backend** (`backend/.env`):

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=userdb
JWT_SECRET=mi_secreto_jwt
```

**Frontend** (`frontend/.env`):

```env
VITE_API_URL=http://localhost:3000
```

## 🐳 Levantar Base de Datos con Docker

```bash
# Ejecutar en la raíz del proyecto:
docker-compose up -d
```

**Verificar contenedor:**

```bash
docker ps # Deberías ver el contenedor 'postgres-db' en ejecución
```

## ⚙️ Instalar Dependencias

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd ../frontend
npm install
```

## 🚦 Ejecutar el Proyecto

### Backend (NestJS)

```bash
cd backend
npm run start:dev
# Servidor disponible en: http://localhost:3000
# Swagger Docs: http://localhost:3000/api
```

### Frontend (React)

```bash
cd frontend
npm run dev
# Aplicación disponible en: http://localhost:5173
```

## 📌 Datos de Prueba

El sistema incluye usuarios predefinidos:

| Email            | Contraseña | Estado |
| ---------------- | ---------- | ------ |
| admin@prueba.com | 123456     | Activo |

## 🔍 Endpoints Clave (Backend)

| Método | Ruta              | Descripción                |
| ------ | ----------------- | -------------------------- |
| POST   | /auth/login       | Inicio de sesión           |
| GET    | /users            | Listar todos los usuarios  |
| PATCH  | /users/:id/toggle | Activar/Desactivar usuario |

## 🛑 Detener Servicios

```bash
# Detener backend/frontend: Ctrl + C en cada terminal
# Detener PostgreSQL:
docker-compose down
```

## 📚 Tecnologías Utilizadas

- **Backend**: NestJS, TypeORM, JWT, Swagger
- **Frontend**: React, Ant Design, Axios, Vite
- **Base de Datos**: PostgreSQL (Docker)
- **Herramientas**: Docker, npm, Git

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

---

### 🔗 Accesos Rápidos

- [Reportar un Issue](https://github.com/ManuPro14/prueba-back-usertable/issues)
- [Documentación de la API](http://localhost:3000/api) (tras iniciar el backend)

![Arquitectura](https://i.imgur.com/XrJkF9m.png)

```

Este README proporciona una guía completa para configurar, ejecutar y entender el proyecto.
**¡Listo para usar!** 🚀
```
