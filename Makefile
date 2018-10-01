export PATH := $(PATH):$(PWD)/node_modules/.bin

install: unpackage
	@pnpm install --ignore-scripts

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

package:
	@tar -zcf store.tar.gz .store

unpackage:
	@tar -zxf store.tar.gz

clean:
	@rm -rf node_modules .store
