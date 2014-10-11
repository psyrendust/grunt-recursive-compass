/**
 * grunt-recursive-compass
 * https://github.com/psyrendust/grunt-recursive-compass/
 *
 * Copyright (c) 2012 Larry Gordon
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    eslint: {
      target: [
        'Gruntfile.js',
        'tasks/*.js',
        'test/*.js'
      ],
      options: {
        config: '.eslintrc'
      }
    },

    // Remove any previously generated files
    clean: {
      test: [
        '.sass-cache',
        'tmp'
      ]
    },

    // Setup for tests
    copy: {
      test: {
        files: [{
          expand: true,
          cwd: 'test/',
          src: [
            'fixtures/**/*.scss',
            'sass/**/*.scss'
          ],
          dest: 'tmp/',
          filter: 'isFile'
        }]
      }
    },

    'recursive-compass': {
      compileWithOptionsDefault: {
        src: [
          'tmp/fixtures/**/*-default.scss'
        ],
        options: {
          sassDir: 'tmp/fixtures',
          cssDir: 'tmp/fixtures',
          noLineComments: true
        }
      },
      compileWithOptionsCompact: {
        src: [
          'tmp/fixtures/**/*-compact.scss'
        ],
        options: {
          outputStyle: 'compact',
          sassDir: 'tmp/fixtures',
          cssDir: 'tmp/fixtures',
          noLineComments: true
        }
      },
      compileWithOptionsCompressed: {
        src: [
          'tmp/fixtures/**/*-compressed.scss'
        ],
        options: {
          outputStyle: 'compressed',
          sassDir: 'tmp/fixtures',
          cssDir: 'tmp/fixtures',
          noLineComments: true
        }
      },
      compileWithOptionsImportPath: {
        src: [
          'tmp/fixtures/test-import-path.scss'
        ],
        options: {
          outputStyle: 'compressed',
          sassDir: 'tmp/fixtures',
          cssDir: 'tmp/fixtures',
          noLineComments: true,
          importPath: 'tmp/sass'
        }
      }
    },

    // watch: {
    //   test: {
    //     files: [
    //       'test/fixtures/**/*.scss'
    //     ],
    //     tasks: 'recursive-compass watch:test'
    //   }
    // },

    // Unit tests.
    nodeunit: {
      options: {
        reporter: 'verbose'
      },
      tests: ['test/*-test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['eslint', 'clean', 'copy', 'recursive-compass', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
