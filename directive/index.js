'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('a3-component:directive', {arguments: this.arguments}, { local: require.resolve('generator-a3-component/directive') });
  }
});

module.exports = Generator;