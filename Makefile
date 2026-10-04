COMPOSE := docker compose --env-file .env -f docker/docker-compose.yml
SANITY := docker run --rm -i -e SANITY_CLI_CALLBACK_PORT=4321 -p 4321:4321 -v "$(HOME)/.config/sanity:/root/.config/sanity" node:22-alpine npx -y -p @sanity/cli@8.12.0 sanity

.PHONY: up down restart sanity-login sanity-projects

up:
	$(COMPOSE) up --build -d

down:
	$(COMPOSE) down

restart:
	$(COMPOSE) up --build -d --force-recreate

sanity-login:
	$(SANITY) login --no-open --provider $${SANITY_PROVIDER:-google}

sanity-projects:
	$(SANITY) projects list
