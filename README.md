# Full-Stack Application with NestJS, React, PostgreSQL, and Turbo

This repository contains a full-stack application, including:

- **NestJS (Backend)**: A server handling API requests and using OpenAI.
- **React (Frontend)**: A client-side application interfacing with the backend.
- **PostgreSQL**: A relational database used for data persistence.
- **Turbo Repo**: A monorepo manager to orchestrate builds and tasks across the project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Setup](#environment-setup)
- [Docker Setup](#docker-setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Common Commands](#common-commands)

## Prerequisites

Make sure you have the following tools installed:

- [Docker](https://www.docker.com/get-started) - Required to build and run containers.
- [Node.js](https://nodejs.org/) - For local development (optional).
- [Yarn](https://yarnpkg.com/) - For package management.

## Environment Setup

You need to set up environment variables for your application in a `.env` file located in the respective directories (`apps/server/.env` for the backend and `apps/client/.env` for the frontend). Additionally, create a root `.env` file for PostgreSQL credentials.

### Root `.env` Example (for PostgreSQL and General Settings)

Create a `.env` file in the root directory:

```bash
# PostgreSQL Environment Variables
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=openai-chat

# Backend (NestJS) Environment Variables
DATABASE_URL=postgres://user:password@postgres:5432/openai-chat
OPENAI_API_KEY=your_openai_api_key
OPENAI_VERSION=v1
APP_PORT=3000

# Frontend (React) Environment Variables
REACT_APP_API_URL=http://localhost:3000
```
