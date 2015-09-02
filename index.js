var gulp    = require('gulp');
var Elixir = require('laravel-elixir');
var del = require('del'); 

Elixir.extend('clear', function(path) {

  new Elixir.Task('clear', function () {
    return del(path);
  })
  .watch(path);

});
