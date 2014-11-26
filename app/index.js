'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var SimpleHtmlGenerator = yeoman.generators.Base.extend({
    initializing: function () {
        this.pkg = require('../package.json');
    },

    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Styla !'
        ));

        var prompts = [
            {
                name: 'appName',
                message: 'What is your site\'s name?',
                default: 'My Simple Website'
            }
        ];

        this.prompt(prompts, function (props) {
            this.appName = props.appName;

            done();
        }.bind(this));
    },

    structure: function () {
        this.mkdir('css');
        this.mkdir('less');
        this.mkdir('img');
        this.mkdir('js');
    },

    files: function () {

        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');

        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');

        this.copy('_Gruntfile.js', 'Gruntfile.js');


        this.copy('www/css/_main.css', 'www/css/main.css');
        this.copy('www/less/_main.less', 'www/less/main.less');
        this.copy('www/_index.html', 'www/index.html');
    },

    end: function () {
        this.installDependencies();
    }
});

module.exports = SimpleHtmlGenerator;
