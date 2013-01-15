/*
 * grunt-recursive-compass
 * https://github.com/psyrendust/grunt-recursive-compass
 *
 * Copyright (c) 2013 Larry Gordon
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var _       = require('underscore');
  var fs      = require('fs');
  var path    = require('path');
  var helpers = require('grunt-lib-contrib').init(grunt);
  var cmd     = process.platform === 'win32' ? 'compass.bat' : 'compass';

  function compile(args, cb) {
    var child = grunt.util.spawn({
      cmd: cmd,
      args: args
    }, function(err, result, code){
      cb((code === 0 || !/Nothing to compile/g.test(result.stdout)) || result.stderr);
    }).on('exit', function(code){
      if (code === 127) {
        grunt.warn(
          'You need to have Ruby and Compass installed ' +
          'and in your system PATH for this task to work. ' +
          'More info: https://github.com/psyrendust/grunt-recursive-compass'
        );
      }
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
  }

  function convertFilesToArray(files) {
    if( _.isString(files) ) {
      return [files];
    } else if ( _.isArray(files) ) {
      return files;
    }
    // It's neither a String or Array.
    // Return an empty Array
    return [];
  }

  grunt.registerMultiTask('recursive-compass', 'Recursively compile Compass to CSS.', function() {
    var data = this.data,
        options = helpers.options(this),
        cb = this.async(),
        filesAry = convertFilesToArray(data.files),
        filesToExclude = convertFilesToArray(data.exclude),
        filesToProcess = [],
        foldersHash = {},
        myArgs = ['compile'].concat(helpers.optsToArgs(options));

    filesToExclude = grunt.file.expandFiles(filesToExclude);
    filesAry = grunt.file.expandFiles(filesAry);

    grunt.verbose.writeflags(options, 'Options');

    filesAry.forEach(function(file){
      // Do not process if it's a SASS Partial
      if(path.basename(file).match(/^_/)) {
        return;
      }
      filesToProcess.push(file);
    });

    // Process file exclusions
    filesToProcess = _.difference(filesToProcess, filesToExclude);

    myArgs = myArgs.concat(filesToProcess);

    compile(myArgs, cb);
  });

};
