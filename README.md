# 🎞️ Movie Rental Store

🇧🇷 Projeto desenvolvido com Angular e TypeScript para uma locadora de filmes fictícia com o objetivo de alugar e gerenciar as mídias físicas de seus filmes online.

🇺🇸 Project developed with Angular and TypeScript for a fictional movie rental store, aimed at renting and managing the physical media of its movies online.

## Run Locally

#### Clone the project

```bash
  git clone git@github.com:carinavbritto/movies-rental-store-frontend.git
```

#### Go to the project directory

```bash
  cd movies-rental-store-frontend
```

#### Install dependencies

```bash
  npm install
```

#### Start a dev server

```bash
  ng serve
```

Navigate to http://localhost:4200/.

#### Build

```bash
  ng build
```

The build artifacts will be stored in the `dist/` directory.

## Docker

#### Prerequisites

Docker installed on your machine. [Docker installation instructions](https://docs.docker.com/get-docker/)

#### Build

Run `docker build -t angular-movie-rental-store .` to build the docker container.

#### Run

Run `docker run -p 4200:4200 angular-movie-rental-store` to run the docker container.

#### Stop

Run `docker ps` to list the docker containers in execution.
Run `docker stop <YOUR CONTAINER ID>` to stop the docker container.

## Tech Stack

**Client:** [Angular (version 18.1.3)](https://angular.dev/)

**Types:** [TypeScript](https://www.typescriptlang.org/)

**Style:**
[Sass](https://sass-lang.com/)

**Containers:**
[Docker](https://www.docker.com/)

**Accessibility:**
[VLibras](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras)
