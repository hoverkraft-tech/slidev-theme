.PHONY: help setup start lint lint-fix build test ci pack

MAKEFLAGS += --silent
.DEFAULT_GOAL := help

help: ## Show help message
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

setup: ## Prepare stack to run
	npm install

start: ## Start the example Slidev deck
	npm run start

lint: ## Run linters
	npm run lint -- $(filter-out $@,$(MAKECMDGOALS))
	$(call run_linter,)

lint-fix: ## Run linters
	npm run lint:fix -- $(filter-out $@,$(MAKECMDGOALS))
	$(MAKE) linter-fix

build: ## Build package and example deck
	npm run build

test: ## Run tests in CI mode
	npm run test:ci

pack: ## Create the publishable theme tarball
	npm run pack

ci: ## Run tests in CI mode
	$(MAKE) setup
	npm audit fix || true
	$(MAKE) lint-fix
	$(MAKE) build
	$(MAKE) test

linter-fix: ## Execute linting and fix
	$(call run_linter, \
		-e FIX_CSS_PRETTIER=true \
		-e FIX_VUE=true \
		-e FIX_VUE_PRETTIER=true \
		-e FIX_JSON_PRETTIER=true \
		-e FIX_JAVASCRIPT_PRETTIER=true \
		-e FIX_TYPESCRIPT_PRETTIER=true \
		-e FIX_YAML_PRETTIER=true \
		-e FIX_MARKDOWN=true \
		-e FIX_MARKDOWN_PRETTIER=true \
		-e FIX_NATURAL_LANGUAGE=true \
	)

define run_linter
	DEFAULT_WORKSPACE="$(CURDIR)"; \
	LINTER_IMAGE="linter:latest"; \
	VOLUME="$$DEFAULT_WORKSPACE:$$DEFAULT_WORKSPACE"; \
	docker build --build-arg UID=$(shell id -u) --build-arg GID=$(shell id -g) --tag $$LINTER_IMAGE .; \
	docker run \
		-e DEFAULT_WORKSPACE="$$DEFAULT_WORKSPACE" \
		-e FILTER_REGEX_INCLUDE="$(filter-out $@,$(MAKECMDGOALS))" \
		-e IGNORE_GITIGNORED_FILES=true \
		-e VALIDATE_TYPESCRIPT_ES=false \
        -e VALIDATE_TSX=false \
        -e VALIDATE_CSS=false \
		$(1) \
		-v $$VOLUME \
		--rm \
		$$LINTER_IMAGE
endef

#############################
# Argument fix workaround
#############################
%:
	@: