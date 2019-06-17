#!/bin/bash
set -e

if ! [ -x "$(command -v jq)" ]; then
  echo 'Error: jq is not installed.' >&2
  exit 1
fi

if ! [[ -z $(git diff-index HEAD) ]]; then
  echo 'Tree is dirty. Commit first'
  exit 1
fi

VERSION=$(jq '.version' -r package.json)

git tag $VERSION

git push --tags