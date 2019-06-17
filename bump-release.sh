#!/bin/bash
set -ex

if ! [ -x "$(command -v jq)" ]; then
  echo 'Error: jq is not installed.' >&2
  exit 1
fi

VERSION=$(jq '.version' -r package.json)

git tag $VERSION

git push --tags