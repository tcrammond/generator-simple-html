'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
    });
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('_page.html'),
      this.destinationPath(this.name + '.html')
    );
  }
});
