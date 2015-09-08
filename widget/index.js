'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('a3-component:widget', {arguments: this.arguments}, { local: require.resolve('generator-a3-component/widget') });
  }
});

module.exports = Generator;
