# eslint-config-keep

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Keep, based off the [Google JavaScript style guide (ES2015+ version)](https://google.github.io/styleguide/jsguide.html).

## Installation

`npm i https://github.com/keep-network/eslint-config-keep.git`

## Usage

### Setting up a project

 1. Install the linter and config - `npm i -D eslint https://github.com/keep-network/eslint-config-keep.git`
 2. Create your `.eslintrc.json`:
 ```json
{
  "extends": "eslint-config-keep",
  "rules": {
    // Additional, per-project rules...
  }
}
 ```
 3. Add commands for linting to your `package.json`:
 ```json
{
  "scripts": {
    "js:lint": "eslint ${npm_package_config_eslintPaths}",
    "js:lint:fix": "eslint --fix ${npm_package_config_eslintPaths}"
  },
  "config": {
    "eslintPaths": "test/ migrations/"
  },
}
```

### Adding a pre-commit hook
```yaml
 - repo: local
   hooks:
    - id: lint-js
      name: 'lint js'
      entry: /usr/bin/env bash -c "npm run js:lint"
      files: '\.js$'
      language: script
      description: "Checks JS code according to the package's linter configuration"
```