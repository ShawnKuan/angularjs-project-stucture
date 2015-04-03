// Configuration for GRUNT, the JavaScript task runner
module.exports = function(grunt) {

    // ### Tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // **jshint** performs a syntax check on all listed JS files
        jshint: {
            all: {
                options: {
                    multistr: true,
                    laxbreak: true,
                    sub: true,
                    es5: true, //drops support for IE8 and lower
                    globals: {
                        console: true,
                        /*angular*/
                        angular: false,
                        module: false,
                        inject: false,
                        /*requirejs*/
                        define: false,
                        /*lodash*/
                        _: false
                    }
                },
                files: {
                    src: ['Gruntfile.js', 'app/js/**/*.js', 'test/**/*.js']
                }
            }
        },
        sass: { // Task
            build: { // Target
                options: { // Target options
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: { // Dictionary of files
                    'build/css/style.css': 'app/sass/style.scss'
                }
            },

            devbuild: { // Target
                options: { // Target options
                    style: 'compact',
                    sourcemap: 'none'
                },
                files: { // Dictionary of files
                    'app/css/style.css': 'app/sass/style.scss'
                }
            }
        },
        // **autoprefixer** is added vendor-prefixes foe defined browsers
        autoprefixer: {
            build: {
                options: {
                    // Task-specific options go here.
                    browsers: ['last 2 versions', 'ie 8', 'ie 9']
                },
                src: 'build/css/style.css',
                dest: 'build/css/style.css'
            },
            devbuild: {
                options: {
                    // Task-specific options go here.
                    browsers: ['last 2 versions', 'ie 8', 'ie 9']
                },
                src: 'app/css/style.css',
                dest: 'app/css/style.css'
            }
            
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "./app/js",

                    mainConfigFile: './app/js/require.config.js',

                    shim: {
                        app: {
                            deps: ['template']
                        },
                        template: {
                            deps: ['angular']
                        }
                    },

                    waitSeconds: 45,

                    optimizeAllPluginResources: true,

                    name: "require.config",

                    optimize: 'uglify',

                    // Output file after optimization
                    out: "build/wdc.build.js"
                }
            }
        },
        // **clean** deletes a folder when it is not needed
        clean: {
            build: ['build/']
        },
        // **usemin** prepares a built version of the html files that contain links
        // to compiled JS and CSS rather than the development ones
        usemin: {
            html: ['build/*.html']
        },
        useminPrepare: {
            html: '*.html',
            options: {
                dest: 'build'
            }
        },
        // **uglify** used to optimize the compiled JS
        uglify: {
            build: {
                src: ['./app/components/requirejs/require.js'],
                dest: './build/components/requirejs/require.js'
            }
        },
        // **compress** creates a zip of the built files for distribution
        compress: {
            main: {
                options: {
                    archive: 'dist/dist.zip'
                },
                files: [{
                    src: ['build/**']
                }]
            }
        },
        // **copy** some files from A to B
        copy: {
            // Copies files for the build version before distribution
            build: {
                files: [{
                    expand: true,
                    flatten: false,
                    cwd: './app',
                    src: ['img/**', 'fonts/**', 'scripts/**', 'index.html'],
                    dest: './build/'
                }]
            },
            setup: {
                files: [{
                    expand: true,
                    flatten: false,
                    cwd: './app/components/font-awesome/',
                    src: ['fonts/**'],
                    dest: './app/'
                }]
            }
        },
        // **concurrent** allows for a faster build process by running tasks in
        // parallel
        concurrent: {
            build: ['requirejs:compile', 'copy:build', 'uglify', 'useminPrepare'],
            preBuild: [ 'clean']
        },

        ngtemplates: {
            'wdc.template': {
                src: 'app/js/modules/**/*.html',
                dest: 'app/js/template.js',
                options: {
                    url: function(url) {
                        // remove "app/" from URLs
                        return url.substr(4);
                    },
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    },
                    standalone: true
                }
            }
        },
        preprocess: {
            options: {
                context: {

                }
            },
            prod: {
                src: 'build/index.html',
                options: {
                    inline: true,
                    context: {
                        debug: false
                    }
                }
            }
        },

        watch: {
            scripts: {
                files: ['app/sass/**/*.scss'],
                tasks: ['css'],
                options: {
                    atBegin: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // ### define our own tasks
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('setup', ['copy:setup']);
    grunt.registerTask('template', ['ngtemplates']);
    grunt.registerTask('css', ['sass:devbuild', 'autoprefixer:devbuild']);
    grunt.registerTask('build', [
      'setup',
      'ngtemplates', 
      'concurrent:preBuild', 
      'sass:build', 
      'autoprefixer:build', 
      'concurrent:build', 
      'usemin', 
      'preprocess:prod', 
      'compress'
    ]);
};