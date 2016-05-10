/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
  });

  app.import('node_modules/babel-polyfill/dist/polyfill.js');
  return app.toTree();
};
