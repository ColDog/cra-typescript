#!/bin/bash

set -e

export PATH="$PATH:$(yarn bin)"

function run() {
  printf "\033[0;36m=> $1\033[0m\n"
  $@
}

echo ""

run eslint 'src/**/*.{js,jsx,graphql}'
run prettier 'src/**/*.{js,jsx,ts,tsx}' --list-different
run tslint -c config/tslint.json 'src/**/*.{ts,tsx}'

echo ""
