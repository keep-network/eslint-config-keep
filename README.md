# eslint-config-keep

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Keep, based off the [Google JavaScript style guide (ES2015+ version)](https://google.github.io/styleguide/jsguide.html).

## Installation

`npm i https://github.com/keep-network/eslint-config-keep.git`

## Usage

Once the `eslint-config-keep` package is installed, you can use it by specifying `eslint-config-keep` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring) in `.eslintrc`:

```js
{
  "extends": "eslint-config-keep",
  "rules": {
    // Additional, per-project rules...
  }
}
```