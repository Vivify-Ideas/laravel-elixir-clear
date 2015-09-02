# laravel-elixir-clear

Elixir extension to clear files and directories

## Install

```bash
$ npm install --save laravel-elixir-clear
```

## Usage

User e.g. to delete intermediary files after elixir version

```js
elixir(function(mix) {
  mix.clear(["public/css/*.css", "public/js/*.js"]);
});```

This will clear css and js directories


