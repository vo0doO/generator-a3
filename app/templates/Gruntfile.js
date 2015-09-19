// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

module.exports = function (grunt) {
    var localConfig;
    try {
        localConfig = require('./server/config/local.env');
    } catch (e) {
        localConfig = {};
    }

    // Load grunt tasks automatically, when needed
    require('jit-grunt')(grunt, {
        express: 'grunt-express-server',
        useminPrepare: 'grunt-usemin',
        ngtemplates: 'grunt-angular-templates',
        protractor: 'grunt-protractor-runner',
        buildcontrol: 'grunt-build-control'
    });

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        pkg: grunt.file.readJSON('package.json'),
        yeoman: {
            // configurable paths
            client: require('./bower.json').appPath || 'client',
            dist: 'dist'
        },
        express: {
            options: {
                port: process.env.PORT || 9000
            },
            dev: {
                options: {
                    script: 'server/app.js',
                    debug: true
                }
            },
            prod: {
                options: {
                    script: 'dist/server/app.js'
                }
            }
        },
        open: {
            server: {
                url: 'http://localhost:<%%= express.options.port %>'
            }
        },
        watch: {
            injectJS: {
                files: [
                    '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.js',
                    '!<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.spec.js',
                    '!<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.mock.js',
                    '!<%= yeoman.client %>/plugins/**/*.module.js',
                    '!<%= yeoman.client %>/sdk/charts/charts.module.js',
                    '!<%= yeoman.client %>/sdk/config/config.module.js',
                    '!<%= yeoman.client %>/sdk/model/model.module.js',
                    '!<%%= yeoman.client %>/sdk/redux/redux.js',
                    '!<%%= yeoman.client %>/sdk/redux/redux.module.js',
                    '!<%%= yeoman.client %>/sdk/utils/utils.module.js',
                    '!<%%= yeoman.client %>/sdk/logger/logger.module.js',
                    '!<%%= yeoman.client %>/sdk/session/session.module.js',
                    '!<%%= yeoman.client %>/sdk/sdk.module.js',
                    '!<%= yeoman.client %>/common/common.module.js',
                    '!<%%= yeoman.client %>/portal/app.js'
                ],
                tasks: ['injector:scripts']
            },
            injectCss: {
                files: [
                    '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.css'
                ],
                tasks: ['injector:css']
            },
            mochaTest: {
                files: ['server/**/*.spec.js'],
                tasks: ['env:test', 'mochaTest']
            },
            jsTest: {
                files: [
                    '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.spec.js',
                    '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.mock.js'
                ],
                tasks: ['newer:jshint:all', 'karma']
            },
            <% if(filters.stylus) { %>
            injectStylus: {
                files: [
                    '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.styl'
                ],
                tasks: ['injector:stylus']
            },
            stylus: {
                files: [
                    '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.styl'
                ],
                tasks: ['stylus', 'autoprefixer']
            },
            <% } %>
            <% if(filters.sass) { %>
            injectSass: {
                files: [
                    '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.{scss,sass}'
                ],
                tasks: ['injector:sass']
            },
            sass: {
                files: [
                    '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.{scss,sass}'
                ],
                tasks: ['sass', 'autoprefixer']
            },
            <% } %>
            <% if(filters.less) { %>
            injectLess: {
                files: [
                    '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.less'
                ],
                tasks: ['injector:less']
            },
            less: {
                files: [
                    '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.less'
                ],
                tasks: ['less', 'autoprefixer']
            },
            <% } %>
            <% if(filters.jade) { %>
            jade: {
                files: [
                    '<%%= yeoman.client %>/{sdk,common,portal,plugins}/*',
                    '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.jade'
                ],
                tasks: ['jade']
            },
            <% } %>
            <% if(filters.coffee) { %>
            coffee: {
                files: [
                    '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.{coffee,litcoffee,coffee.md}',
                    '!<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.spec.{coffee,litcoffee,coffee.md}'
                ],
                tasks: ['newer:coffee', 'injector:scripts']
            },
            coffeeTest: {
                files: [
                    '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.spec.{coffee,litcoffee,coffee.md}'
                ],
                tasks: ['karma']
            },
            <% } %>
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                files: [
                    '{.tmp,<%%= yeoman.client %>}/{sdk,common,portal,plugins}/**/*.css',
                    '{.tmp,<%%= yeoman.client %>}/{sdk,common,portal,plugins}/**/*.html',
                    '{.tmp,<%%= yeoman.client %>}/{sdk,common,portal,plugins}/**/*.js',
                    '!{.tmp,<%%= yeoman.client %>}{sdk,common,portal,plugins}/**/*.spec.js',
                    '!{.tmp,<%%= yeoman.client %>}/{sdk,common,portal,plugins}/**/*.mock.js',
                    '<%%= yeoman.client %>/assets/images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                options: {
                    livereload: true
                }
            },
            express: {
                files: [
                    'server/**/*.{js,json}'
                ],
                tasks: ['express:dev', 'wait'],
                options: {
                    livereload: true,
                    nospawn: true //Without this option specified express won't be reloaded
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '<%%= yeoman.client %>/.jshintrc',
                reporter: require('jshint-stylish')
            },
            server: {
                options: {
                    jshintrc: 'server/.jshintrc'
                },
                src: [
                    'server/**/*.js',
                    '!server/**/*.spec.js'
                ]
            },
            serverTest: {
                options: {
                    jshintrc: 'server/.jshintrc-spec'
                },
                src: ['server/**/*.spec.js']
            },
            all: [
                '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.js',
                '!<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.spec.js',
                '!<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.mock.js'
            ],
            test: {
                src: [
                    '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.spec.js',
                    '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.mock.js'
                ]
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%%= yeoman.dist %>/*',
                        '!<%%= yeoman.dist %>/.git*',
                        '!<%%= yeoman.dist %>/Procfile'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/',
                    src: '{,*/}*.css',
                    dest: '.tmp/'
                }]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: '*',
                livereload: 35729,
                onCreateServer: function (server, connect, options) {
                    var io = require('socket.io').listen(server);
                    io.sockets.on('connection', function (socket) {});
                }
            },
            livereload: {
                options: {
                    open: false,
                    middleware: function (connect) {
                        var client = 'client';
                        return [
                            connect.static(client),
                            connect.static('.tmp'),
                            connect().use(
                                '/client/plugins',
                                '/client/portal',
                                '/client/bower_components',
                                '/client/sdk',
                                connect.static('./client/bower_components'),
                                connect.static('./client/assets')
                            )
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function (connect) {
                        var client = 'client';
                        return [
                            connect.static(client),
                            connect.static('test'),
                            connect().use(
                                '/client/plugins',
                                '/client/portal',
                                '/client/bower_components',
                                '/client/sdk',
                                connect.static('./client/bower_components'),
                                connect.static('./client/assets')
                            )
                        ];
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>'
                }
            }
        },

        // Automatically inject Bower sdk into the app
        wiredep: {
            target: {
                src: '<%%= yeoman.client %>/index.html',
                ignorePath: '<%%= yeoman.client %>/',
                exclude: [/bootstrap-sass-official/, /bootstrap.js/, '/json3/', '/es5-shim/'
                    <% if(!filters.css) { %>, /bootstrap.css/, /font-awesome.css/
                    <% } %>
                ]
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%%= yeoman.dist %>/{,*/}*.js',
                        '<%%= yeoman.dist %>/{,*/}*.css',
                        '<%%= yeoman.dist %>/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%%= yeoman.dist %>/assets/fonts/*'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: ['<%%= yeoman.client %>/index.html'],
            options: {
                dest: '<%%= yeoman.dist %>'
            }
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            html: ['<%%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%%= yeoman.dist %>/{,*/}*.css'],
            js: ['<%%= yeoman.dist %>/{,*/}*.js'],
            options: {
                assetsDirs: [
                    '<%%= yeoman.dist %>',
                    '<%%= yeoman.dist %>/assets/images'
                ],
                // This is so we update image references in our ng-templates
                patterns: {
                    js: [
                        [/(assets\/images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the JS to reference our revved images']
                    ]
                }
            }
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.client %>/assets/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%%= yeoman.dist %>/assets/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.client %>/assets/images',
                    src: '{,*/}*.svg',
                    dest: '<%%= yeoman.dist %>/assets/images'
                }]
            }
        },

        // Allow the use of non-minsafe AngularJS files. Automatically makes it
        // minsafe compatible so Uglify does not destroy the ng references
        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat',
                    src: '*/**.js',
                    dest: '.tmp/concat'
                }]
            }
        },

        // Package all the html partials into a single javascript payload
        ngtemplates: {
            options: {
                // This should be the name of your apps angular module
                module: '<%= scriptAppName %>',
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                },
                usemin: 'app/app.js'
            },
            main: {
                cwd: '<%%= yeoman.client %>',
                src: ['{sdk,common,portal,plugins}/**/*.html',
                    '!{sdk,common,portal,plugins}/**/*.spec.html'
                ],
                dest: '.tmp/templates.js'
            },
            tmp: {
                cwd: '.tmp',
                src: ['{sdk,common,portal,plugins}/**/*.html'],
                dest: '.tmp/tmp-templates.js'
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                        expand: true,
                        dot: true,
                        cwd: '<%%= yeoman.client %>',
                        dest: '<%%= yeoman.dist %>',
                        src: [
                            '*.{ico,png,txt}',
                            '.htaccess',
                            'assets/images/{,*/}*.{webp}',
                            'assets/fonts/**/*',
                            'index.html'
                        ]
                    }, {
                        expand: true,
                        cwd: '.tmp/images',
                        dest: '<%%= yeoman.dist %>/assets/images',
                        src: ['generated/*']
                    }
                    // , {
                    //   expand: true,
                    //   dest: '<%%= yeoman.dist %>',
                    //   src: [
                    //     'package.json',
                    //     'server/**/*'
                    //   ]
                    // }
                ]
            },
            styles: {
                expand: true,
                cwd: '<%%= yeoman.client %>',
                dest: '.tmp/',
                src: ['{sdk,common,portal,plugins}/**/*.css']
            }
        },

        buildcontrol: {
            options: {
                dir: 'dist',
                commit: true,
                push: true,
                connectCommits: false,
                message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [<% if(filters.coffee) { %>
                'coffee', <% } %>
                <% if(filters.jade) { %>
                'jade', <% } %>
                <% if(filters.stylus) { %>
                'stylus', <% } %>
                <% if(filters.sass) { %>
                'sass', <% } %>
                <% if(filters.less) { %>
                'less', <% } %>
            ],
            test: [<% if(filters.coffee) { %>
                'coffee', <% } %>
                <% if(filters.jade) { %>
                'jade', <% } %>
                <% if(filters.stylus) { %>
                'stylus', <% } %>
                <% if(filters.sass) { %>
                'sass', <% } %>
                <% if(filters.less) { %>
                'less', <% } %>
            ],
            debug: {
                tasks: [
                    'nodemon',
                    'node-inspector'
                ],
                options: {
                    logConcurrentOutput: true
                }
            },
            dist: [<% if(filters.coffee) { %>
                'coffee', <% } %>
                <% if(filters.jade) { %>
                'jade', <% } %>
                <% if(filters.stylus) { %>
                'stylus', <% } %>
                <% if(filters.sass) { %>
                'sass', <% } %>
                <% if(filters.less) { %>
                'less', <% } %>
                'imagemin',
                'svgmin'
            ]
        },

        // Test settings
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },

        mochaTest: {
            options: {
                reporter: 'spec'
            },
            src: ['server/**/*.spec.js']
        },

        protractor: {
            options: {
                configFile: 'protractor.conf.js'
            },
            chrome: {
                options: {
                    args: {
                        browser: 'chrome'
                    }
                }
            }
        },

        env: {
            test: {
                NODE_ENV: 'test'
            },
            prod: {
                NODE_ENV: 'production'
            },
            all: localConfig
        },
        <% if(filters.jade) { %>

        // Compiles Jade to html
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.client %>',
                    src: [
                        '{sdk,common,portal,plugins}/**/*.jade'
                    ],
                    dest: '.tmp',
                    ext: '.html'
                }]
            }
        },
        <% } %>
        <% if(filters.coffee) { %>

        // Compiles CoffeeScript to JavaScript
        coffee: {
            options: {
                sourceMap: true,
                sourceRoot: ''
            },
            server: {
                files: [{
                    expand: true,
                    cwd: 'client',
                    src: [
                        '{sdk,common,portal,plugins}/**/*.coffee',
                        '!{sdk,common,portal,plugins}/**/*.spec.coffee'
                    ],
                    dest: '.tmp',
                    ext: '.js'
                }]
            }
        },
        <% } %>
        <% if(filters.stylus) { %>

        // Compiles Stylus to CSS
        stylus: {
            server: {
                options: {
                    paths: [
                        '<%%= yeoman.client %>/bower_components',
                        '<%%= yeoman.client %>/plugins',
                        '<%%= yeoman.client %>/portal',
                        '<%%= yeoman.client %>/sdk'
                    ],
                    "include css": true
                },
                files: {
                    '.tmp/portal/app.css': '<%%= yeoman.client %>/portal/app.styl'
                }
            }
        },
        <% } %>
        <% if(filters.sass) { %>

        // Compiles Sass to CSS
        sass: {
            server: {
                options: {
                    loadPath: [
                        '<%%= yeoman.client %>/bower_components',
                        '<%%= yeoman.client %>/plugins',
                        '<%%= yeoman.client %>/portal',
                        '<%%= yeoman.client %>/sdk'
                    ],
                    compass: false
                },
                files: {
                    '.tmp/portal/app.css': '<%%= yeoman.client %>/portal/app.scss'
                }
            }
        },
        <% } %>
        <% if(filters.less) { %>

        // Compiles Less to CSS
        less: {
            options: {
                paths: [
                    '<%%= yeoman.client %>/bower_components',
                    '<%%= yeoman.client %>/plugins',
                    '<%%= yeoman.client %>/portal',
                    '<%%= yeoman.client %>/sdk'
                ]
            },
            server: {
                files: {
                    '.tmp/portal/app.css': '<%%= yeoman.client %>/portal/app.less'
                }
            },
        },
        <% } %>

        injector: {
            options: {

            },
            // Inject application script files into index.html (doesn't include bower)
            scripts: {
                options: {
                    transform: function (filePath) {
                        filePath = filePath.replace('/client/', '');
                        filePath = filePath.replace('/.tmp/', '');
                        return '<script src="' + filePath + '"></script>';
                    },
                    starttag: '<!-- injector:js -->',
                    endtag: '<!-- endinjector -->'
                },
                files: {
                    '<%%= yeoman.client %>/index.html': [
                        ['{.tmp,<%%= yeoman.client %>}/{sdk,common,portal,plugins}/**/*.js',
                            '!{.tmp,<%%= yeoman.client %>}/{sdk,common,portal,plugins}/**/*.spec.js',
                            '!{.tmp,<%%= yeoman.client %>}/{sdk,common,portal,plugins}/**/*.mock.js',
                            '!<%= yeoman.client %>/plugins/**/*.module.js',
                            '!<%= yeoman.client %>/sdk/charts/charts.module.js',
                            '!<%= yeoman.client %>/sdk/config/config.module.js',
                            '!<%= yeoman.client %>/sdk/model/model.module.js',
                            '!<%%= yeoman.client %>/sdk/redux/redux.js',
                            '!<%%= yeoman.client %>/sdk/redux/redux.module.js',
                            '!<%%= yeoman.client %>/sdk/utils/utils.module.js',
                            '!<%%= yeoman.client %>/sdk/logger/logger.module.js',
                            '!<%%= yeoman.client %>/sdk/session/session.module.js',
                            '!<%%= yeoman.client %>/sdk/sdk.module.js',
                            '!<%= yeoman.client %>/common/common.module.js',
                            '!<%%= yeoman.client %>/portal/app.js'
                        ]
                    ]
                }
            },

            plugins: {
                options: {
                    transform: function (filePath) {
                        filePath = filePath.replace('/client/', '');
                        filePath = filePath.replace('/.tmp/', '');
                        return '<script src="' + filePath + '"></script>';
                    },
                    starttag: '<!-- injectorplugins:js -->',
                    endtag: '<!-- endinjectorplugins -->'
                },
                files: {
                    '<%= yeoman.client %>/index.html': [
                        ['<%= yeoman.client %>/plugins/**/*.module.js']
                    ]
                }
            },

            <% if(filters.stylus) { %>

            // Inject component styl into app.styl
            stylus: {
                options: {
                    transform: function (filePath) {
                        filePath = filePath.replace('/client/plugins/', '');
                        filePath = filePath.replace('/client/portal/', '');
                        filePath = filePath.replace('/client/sdk/', '');
                        filePath = filePath.replace('/client/common/', '');
                        return '@import \'' + filePath + '\';';
                    },
                    starttag: '// injector',
                    endtag: '// endinjector'
                },
                files: {
                    '<%%= yeoman.client %>/portal/app.styl': [
                        '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.styl',
                        '!<%%= yeoman.client %>/portal/app.styl'
                    ]
                }
            },
            <% } %>
            <% if(filters.sass) { %>

            // Inject component scss into app.scss
            sass: {
                options: {
                    transform: function (filePath) {
                        filePath = filePath.replace('/client/plugins/', '');
                        filePath = filePath.replace('/client/portal/', '');
                        filePath = filePath.replace('/client/sdk/', '');
                        return '@import \'' + filePath + '\';';
                    },
                    starttag: '// injector',
                    endtag: '// endinjector'
                },
                files: {
                    '<%%= yeoman.client %>/portal/app.scss': [
                        '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.{scss,sass}',
                        '!<%%= yeoman.client %>/portal/app.{scss,sass}'
                    ]
                }
            },
            <% } %>
            <% if(filters.less) { %>

            // Inject component less into app.less
            less: {
                options: {
                    transform: function (filePath) {
                        filePath = filePath.replace('/client/plugins/', '');
                        filePath = filePath.replace('/client/portal/', '');
                        filePath = filePath.replace('/client/sdk/', '');
                        filePath = filePath.replace('/client/common/', '');
                        return '@import \'' + filePath + '\';';
                    },
                    starttag: '// injector',
                    endtag: '// endinjector'
                },
                files: {
                    '<%%= yeoman.client %>/portal/app.less': [
                        '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.less',
                        '!<%%= yeoman.client %>/portal/app.less'
                    ]
                }
            },
            <% } %>

            // Inject component css into index.html
            css: {
                options: {
                    transform: function (filePath) {
                        filePath = filePath.replace('/client/', '');
                        filePath = filePath.replace('/.tmp/', '');
                        return '<link rel="stylesheet" href="' + filePath + '">';
                    },
                    starttag: '<!-- injector:css -->',
                    endtag: '<!-- endinjector -->'
                },
                files: {
                    '<%%= yeoman.client %>/index.html': [
                        '<%%= yeoman.client %>/{sdk,common,portal,plugins}/**/*.css'
                    ]
                }
            }
        },
    });

    // Used for delaying livereload until after server has restarted
    grunt.registerTask('wait', function () {
        grunt.log.ok('Waiting for server reload...');

        var done = this.async();

        setTimeout(function () {
            grunt.log.writeln('Done waiting!');
            done();
        }, 1500);
    });

    grunt.registerTask('express-keepalive', 'Keep grunt running', function () {
        this.async();
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'env:all', 'env:prod', 'express:prod', 'wait', 'open', 'express-keepalive']);
        }

        if (target === 'debug') {
            return grunt.task.run([
                'clean:server',
                'env:all', <% if(filters.stylus) { %>
                'injector:stylus', <% } %>
                <% if(filters.less) { %>
                'injector:less', <% } %>
                <% if(filters.sass) { %>
                'injector:sass', <% } %>
                'concurrent:server',
                'injector',
                'wiredep',
                'autoprefixer', // not use nodemon in server ,
                'concurrent:debug'
            ]);
        }

        grunt.task.run([
            'clean:server',
            'env:all', <% if(filters.stylus) { %>
            'injector:stylus', <% } %>
            <% if(filters.less) { %>
            'injector:less', <% } %>
            <% if(filters.sass) { %>
            'injector:sass', <% } %>
            'concurrent:server',
            'injector',
            'wiredep',
            'autoprefixer',
            //'connect:livereload',
            'express:dev',
            'wait',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('server', function () {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('test', function (target) {
        if (target === 'server') {
            return grunt.task.run([
                'env:all',
                'env:test',
                'mochaTest'
            ]);
        } else if (target === 'client') {
            return grunt.task.run([
                'clean:server',
                'env:all', <% if(filters.stylus) { %>
                'injector:stylus', <% } %>
                <% if(filters.less) { %>
                'injector:less', <% } %>
                <% if(filters.sass) { %>
                'injector:sass', <% } %>
                'concurrent:test',
                'injector',
                'autoprefixer',
                'karma'
            ]);
        } else if (target === 'e2e') {
            return grunt.task.run([
                'clean:server',
                'env:all',
                'env:test', <% if(filters.stylus) { %>
                'injector:stylus', <% } %>
                <% if(filters.less) { %>
                'injector:less', <% } %>
                <% if(filters.sass) { %>
                'injector:sass', <% } %>
                'concurrent:test',
                'injector',
                'wiredep',
                'autoprefixer',
                //'connect:livereload',
                'express:dev',
                'protractor'
            ]);
        } else grunt.task.run([
            'test:server',
            'test:client'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist', <% if(filters.stylus) { %>
        'injector:stylus', <% } %>
        <% if(filters.less) { %>
        'injector:less', <% } %>
        <% if(filters.sass) { %>
        'injector:sass', <% } %>
        'concurrent:dist',
        'injector',
        'wiredep',
        'useminPrepare',
        'autoprefixer',
        'ngtemplates',
        'concat',
        'ngAnnotate',
        'copy:dist',
        'cssmin',
        'uglify',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};
