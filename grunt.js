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

    // Linting
    lint: {
      all: [
        'grunt.js',
        'tasks/**/*.js',
        'test/*.js'
      ]
    },

    jshint: {
      options: {
        "curly": true,
        "eqeqeq": true,
        "immed": true,
        "latedef": true,
        "newcap": true,
        "noarg": true,
        "sub": true,
        "undef": true,
        "boss": true,
        "eqnull": true,
        "node": true,
        "es5": true
      },
      globals: {}
    },

    // Remove any previously generated files
    clean: {
      test: [
        '.sass-cache',
        'test/fixtures/**/*.css'
      ]
    },

    'recursive-compass': {
      compileFilesAsArray: {
        files: [
          'test/fixtures/**/*.{scss,sass}'
        ],
        exclude: ['test/fixtures/**/testImportPath.{scss,sass}'],
        options: {
          sassDir: 'test/fixtures',
          cssDir: 'test/fixtures',
          noLineComments: true
        }
      },
      compileFilesAsString: {
        files: 'test/fixtures/**/*.{scss,sass}',
        exclude: ['test/fixtures/**/testImportPath.{scss,sass}'],
        options: {
          sassDir: 'test/fixtures',
          cssDir: 'test/fixtures',
          noLineComments: true
        }
      },
      compileWithFileExclude: {
        files: 'test/fixtures/**/*.{scss,sass}',
        exclude: [
          'test/fixtures/**/foo.{scss,sass}',
          'test/fixtures/**/testImportPath.{scss,sass}'
        ],
        options: {
          outputStyle: 'compressed',
          sassDir: 'test/fixtures',
          cssDir: 'test/fixtures',
          noLineComments: true
        }
      },
      compileWithOptionsCompact: {
        files: 'test/fixtures/**/*.{scss,sass}',
        exclude: ['test/fixtures/**/testImportPath.{scss,sass}'],
        options: {
          outputStyle: 'compact',
          sassDir: 'test/fixtures',
          cssDir: 'test/fixtures',
          noLineComments: true
        }
      },
      compileWithOptionsCompressed: {
        files: 'test/fixtures/**/*.{scss,sass}',
        exclude: ['test/fixtures/**/testImportPath.{scss,sass}'],
        options: {
          outputStyle: 'compressed',
          sassDir: 'test/fixtures',
          cssDir: 'test/fixtures',
          noLineComments: true
        }
      },
      compileWithOptionsImportPath: {
        files: ['test/fixtures/**/testImportPath.{scss,sass}'],
        options: {
          outputStyle: 'compressed',
          sassDir: 'test/fixtures',
          cssDir: 'test/fixtures',
          noLineComments: true,
          importPath: 'test/sass'
        }
      }
    },

    watch: {
      test: {
        files: [
          'test/fixtures/**/*.{scss,sass}'
        ],
        tasks: 'recursive-compass watch:test'
      }
    },

    // Unit tests.
    nodeunit: {
      compileFilesAsArray          : ['test/compileFilesAsArray_test.js'],
      compileFilesAsString         : ['test/compileFilesAsString_test.js'],
      compileWithFileExclude       : ['test/compileWithFileExclude_test.js'],
      compileWithOptionsCompact    : ['test/compileWithOptionsCompact_test.js'],
      compileWithOptionsCompressed : ['test/compileWithOptionsCompressed_test.js'],
      compileWithOptionsImportPath : ['test/compileWithOptionsImportPath_test.js']
    }

  });

  // Load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins povide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.renameTask('test', 'nodeunit');
  grunt.registerTask('test', [
    'clean',
    'recursive-compass:compileFilesAsArray',
    'nodeunit:compileFilesAsArray',
    'clean',
    'recursive-compass:compileFilesAsString',
    'nodeunit:compileFilesAsString',
    'clean',
    'recursive-compass:compileWithFileExclude',
    'nodeunit:compileWithFileExclude',
    'clean',
    'recursive-compass:compileWithOptionsCompact',
    'nodeunit:compileWithOptionsCompact',
    'clean',
    'recursive-compass:compileWithOptionsCompressed',
    'nodeunit:compileWithOptionsCompressed',
    'clean',
    'recursive-compass:compileWithOptionsImportPath',
    'nodeunit:compileWithOptionsImportPath',
    'clean'
  ]);

  // Default task.
  grunt.registerTask('default', 'lint test');

};
