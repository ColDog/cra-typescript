export PATH := $(PATH):$(PWD)/node_modules/.bin

install: unpackage
	@pnpm recursive install --ignore-scripts

package:
	@tar -zcf store.tar.gz .store

unpackage:
	@tar -zxf store.tar.gz

clean:
	@rm -rf **/node_modules .store
