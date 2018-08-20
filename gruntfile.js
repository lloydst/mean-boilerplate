module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt, {
        config: './package.json',
        scope: 'devDependencies'
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),
        config: {
            webroot: './styleguide',
            scss: './styleguide/scss',
            css: '<%= config.webroot %>/assets/css'
        },

        watch: {
            options: {
                spawn: false
            },
            base: {
                files: '<%= config.scss %>/**/*.scss',
                tasks: ['sass:dev']
            },
        },

        sass: {
            dev: {
                options: {
                    outputStyle: 'expanded',
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.scss %>',
                    src: ['*.scss'],
                    dest: '<%= config.css %>',
                    ext: '.css',
                }]
            },
            dist: {
                options: {
                    outputStyle: 'expanded',
                    sourceMap: false
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.scss %>',
                    src: ['*.scss'],
                    dest: '<%= config.css %>',
                    ext: '.css',
                }]
            },
        }
    });

    grunt.registerTask('build-sass', 'Compile Scss to CSS', [
        'sass:dist'
    ]);
};