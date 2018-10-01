export PATH := $(PATH):$(PWD)/node_modules/.bin

test:
	@node scripts/test.js

lint:
	@./scripts/lint.sh

format:
	@prettier --write ./src/**/*.{ts,tsx,js,jsx}
