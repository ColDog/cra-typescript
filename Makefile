export PATH := $(PATH):$(PWD)/node_modules/.bin

install:
	@yarn install --ignore-scripts

clean:
	@rm -rf node_modules **/node_modules **/dist
