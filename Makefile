COMPOSE := docker compose -f docker/docker-compose.yml

.PHONY: up down restart

up:
	$(COMPOSE) up --build -d

down:
	$(COMPOSE) down

restart:
	$(COMPOSE) up --build -d --force-recreate
