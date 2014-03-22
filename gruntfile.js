module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
          dist: {
            options: {
                style: 'expanded'
            },
            files: {
                'css/main.css': 'scss/main.scss'
            }
          }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 9']
            },
            single_file: {
                src: 'css/main.css',
                dest: 'css/main.prefixed.css'
            }
        },

        cssmin: {
            combine: {
                files: {
                    'css/main.min.css': ['css/main.prefixed.css']
                }
            }
        },

        jshint: {
            beforeconcat: ['js/scripts.js']
        },

        concat: {
          dist: {
            src: [
                'js/_libs/*.js',
                'js/scripts.js'
            ],
            dest: 'js/scripts.concat.js'
          }
        },

        uglify: {
            build: {
                src: 'js/scripts.concat.js',
                dest: 'js/scripts.min.js'
            }
        },

        jekyll: {
            dist: {
                options: {

                }
            },
            dev: {
                options: {
                    limit_posts: 2
                }
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['sass', 'autoprefixer', 'cssmin', 'jekyll:dev'],
                options: {
                    spawn: false,
                    interrupt: true
                }
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['jshint', 'concat', 'uglify', 'jekyll:dev'],
                options: {
                    spawn: false,
                    interrupt: true
                }
            },
            html: {
                files: ['**/*.html', '!_site/**/*.html'],
                tasks: ['jekyll:dev'],
                options: {
                    spawn: false,
                    interrupt: true
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    base: './',
                }
            }
        },

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'jshint', 'concat', 'uglify', 'jekyll:dist']);
    grunt.registerTask('dev', ['connect', 'watch']);

};
