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
                name: 'siteName',
                message: 'What is your site\'s name?',
                default: 'My Simple Website'
            }
        ];

        this.prompt(prompts, function (props) {
            this.siteName = props.siteName;

            done();
        }.bind(this));
    },

    structure: function () {
        this.mkdir('www');
        this.mkdir('www/css');
        this.mkdir('less');
        this.mkdir('www/img');
        this.mkdir('www/js');
    },

    files: function () {

        var context = {
            site_name: this.siteName
        };

        this.template('_package.json', 'package.json', context);
        this.template('_bower.json', 'bower.json', context);

        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');

        this.template('_Gruntfile.js', 'Gruntfile.js', context);


        this.copy('www/css/_main.css', 'www/css/main.css');
        this.copy('www/img/styla.png', 'www/img/styla.png');
        this.copy('less/_main.less', 'less/main.less');
        this.copy('less/_variables.less', 'less/variables.less');
        this.template('www/_index.html', 'www/index.html', context);
    },

    end: function () {
        this.installDependencies();
    }
});

module.exports = SimpleHtmlGenerator;
