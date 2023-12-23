CASE = tests/

build:
	docker compose -f .devcontainer/docker-compose.yml build --no-cache --force-rm
up:
	docker compose -f .devcontainer/docker-compose.yml up -d
down:
	docker compose -f .devcontainer/docker-compose.yml down --remove-orphans
init:
	@make build
	@make up
start:
	@make up
	docker compose -f .devcontainer/docker-compose.yml exec app npm run dev -- --host 0.0.0.0
restart:
	@make down
	@make up
destroy:
	docker compose -f .devcontainer/docker-compose.yml down --rmi all --volumes --remove-orphans
	docker image prune -f
console:
	docker compose -f .devcontainer/docker-compose.yml exec app bash
ps:
	docker compose -f .devcontainer/docker-compose.yml ps
logs:
	docker compose -f .devcontainer/docker-compose.yml logs
test:
	docker compose -f .devcontainer/docker-compose.yml exec app vendor/bin/phpunit -c tests/ --colors=always ${CASE}
