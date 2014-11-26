/*jslint node: true */
'use strict';

module.exports = function (grunt) {

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({

        /**
         * Runs a webserver on http://localhost:9000.
         * It will be accessible on the local network by people who know the IP.
         */
        connect: {
            main: {
                options: {
                    hostname: '*',
                    port: 9000,
                    livereload: true
                }
            }
        },

        /**
         * Watch for changes to files and automatically reload the page.
         */
        watch: {
            main: {
                options: {
                    livereload: true,
                    livereloadOnError: false,
                    spawn: false
                },
                files: ['www/*.html', 'www/**/*.html', 'www/img/*', 'less/**/*.less', 'less/*.less'],
                tasks: ['less'] //all the tasks are run dynamically during the watch event handler
            }
        },

        /**
         * Compile LESS to CSS.
         */
        less: {
            production: {
                options: {},
                files: {
                    'www/css/main.css': 'less/main.less'
                }
            }
        }
    });

    grunt.registerTask('serve', ['connect:main', 'watch']);

};
