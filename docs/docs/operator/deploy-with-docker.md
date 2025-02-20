# Deploy with Docker

Docker compose is the easiest way to deploy a self-hosted instance of Fonoster. This guide will walk you through the process of deploying the Fonoster services using Docker and Docker Compose.

## Prerequisites

The only prerequisite for Fonoster is to have [Docker](https://docs.docker.com/get-docker/) installed on the host machine.

## Installation

First, create a new directory in your preferred location and change to that directory. For this guide, we will use the directory `fonoster` in the home directory.

```bash
mkdir fonoster
cd fonoster
```

Next, copy the `.env.example` from the repository to the current directory and rename it to `.env`. This file contains all the environment variables that the services need to run. You can use the following command to copy the file:

```bash
curl -o .env https://raw.githubusercontent.com/fonoster/fonos/main/.env.example
```

Then, open the `.env` file with your favorite editor and update the following variables:

- `DOCKER_HOST_ADDRESS`: The public IP address of your Docker host. If running locally, you can use your local IP address. If you are running the application on a server, you must use the public IP address of your server
- `NEXTAUTH_URL` and `WEBUI_APP_URL` must be the URL where the application will be accessible. For example, if you are running the application locally, you can use `http://localhost:8080`. If you are running the application on a server, you can use, for example, `https://fonoster.example.com`
- `WEBUI_TEST_PHONE_SERVER` - The public IP address of your Docker host. If running locally, you can use your local IP address. If you are running the application on a server, you must use the public IP address of your server.

In addition to the previous variables, you should also change all the secrets with your own values and make sure to sefe-guard the `.env` file.

Next, run the following command to start the application:

```bash
curl -o ./compose.yaml https://raw.githubusercontent.com/fonoster/fonoster/main/compose.yaml
docker compose up -d
```

Finally, you can access the application by visiting the URL you set in the `WEBUI_APP_URL` variable. For example, if you set the variable to `http://localhost:8080`, you can access the application by visiting [http://localhost:8080](http://localhost:8080) in your browser.

## Next Steps

- [Configuring Vault for secrets](./configuring-vault.md)
