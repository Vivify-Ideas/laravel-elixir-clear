var gulp    = require('gulp');
var Elixir = require('laravel-elixir');
var del = require('del'); 

Elixir.extend('remove', function(path) {

  new Elixir.Task('remove', function () {
    return del(path);
  })
  .watch(path);

});
