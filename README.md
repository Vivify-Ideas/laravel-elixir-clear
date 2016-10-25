# laravel-elixir-clear

Elixir extension to clear files and directories.

## Install

```bash
$ npm install --save laravel-elixir-clear
```

## Usage

Clear CSS and JS directories.

```js
elixir(function(mix) {
  mix.clear(["public/css/*.css", "public/js/*.js"]);
});
```
