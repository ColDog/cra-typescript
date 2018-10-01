#!/bin/bash

set -e

rm -rf dist
tsc
cp package.json dist/
