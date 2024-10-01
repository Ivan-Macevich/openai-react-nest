# Full-Stack OpenAI Chat Application with NestJS, React, Turbo Repo, and PostgreSQL

This repository contains a full-stack chat application powered by OpenAI's API. It is built using:

- **NestJS** for the backend (Node.js framework)
- **React** for the frontend
- **PostgreSQL** as the database
- **Turbo Repo** for monorepo management

## Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Setup](#environment-setup)
- [Docker Setup](#docker-setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Common Commands](#common-commands)

## Prerequisites

Before starting, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started) - to run the containers
- [Node.js](https://nodejs.org/) - for local development (optional)
- [Yarn](https://yarnpkg.com/) - for package management

## Environment Setup

You need to configure environment variables in a `.env` file located in the root of the project.

### Example `.env` File

```bash
# PostgreSQL Configuration
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=openai-chat
POSTGRES_PORT=5433

# Backend (NestJS) Configuration
BACKEND_PORT=3000
DATABASE_URL=postgres://user:password@postgres:5432/openai-chat

# Frontend (React) Configuration
FRONTEND_PORT=3001
REACT_APP_API_URL=http://localhost:3000
POSTGRES_USER: PostgreSQL username.
POSTGRES_PASSWORD: PostgreSQL password.
POSTGRES_DB: PostgreSQL database name.
DATABASE_URL: The connection URL for the backend to access the database.
REACT_APP_API_URL: The URL that React will use to communicate with the backend.
Docker Setup
1. Clone the Repository
bash
Copy code
git clone <repository-url>
cd <repository-directory>
2. Docker Compose
This project includes a docker-compose.yml file for orchestrating all services (PostgreSQL, NestJS backend, React frontend).

3. Build and Run the Docker Containers
To build and start the containers:

bash
Copy code
docker-compose up --build
This will:

Spin up a PostgreSQL database.
4. Stop the Containers
To stop the running containers:

bash
Copy code
docker-compose down
This will gracefully shut down the containers.

Project Structure
The project is structured as a monorepo using Turbo Repo. The main directories are:

plaintext
Copy code
.
├── backend            # NestJS backend
├── frontend           # React frontend
├── docker-compose.yml # Docker services configuration
├── .env               # Environment configuration
├── turbo.json         # Turbo Repo configuration
└── README.md          # Project documentation
backend/: Contains the NestJS backend logic, including controllers, services, and Prisma ORM integration.
frontend/: Contains the React frontend, including components and API interaction with the backend.
Common Commands
Backend (NestJS)
From the backend/ directory, run:

Start development server: yarn start:dev
Build: yarn build
Frontend (React)
From the frontend/ directory, run:

Start development server: yarn start
Build for production: yarn build
Turbo Repo
Turbo Repo allows you to build and run tasks across the monorepo.

Run all builds: npx turbo run build
Run frontend/backend builds: npx turbo run build --filter=frontend --filter=backend
```
