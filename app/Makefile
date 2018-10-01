export PATH := $(PATH):$(PWD)/node_modules/.bin

start:
	@node scripts/start.js

build:
	@node scripts/build.js

test:
	@node scripts/test.js

lint:
	@./scripts/lint.sh

format:
	@prettier --write ./src/**/*.{ts,tsx,js,jsx}
