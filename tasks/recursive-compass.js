/**
 * grunt-recursive-compass
 * https://github.com/psyrendust/grunt-recursive-compass/
 *
 * Copyright (c) 2014 Larry Gordon
 * http://psyrendust.mit-license.org/2014/license.html
 */

'use strict';

module.exports = function(grunt) {

  var cmd = process.platform === 'win32' ? 'compass.bat' : 'compass';
  var dargs = require('dargs');
  var path = require('path');
  var sassPartialReg = /^_/;

  function compile(args, cb) {
    var child = grunt.util.spawn({
      cmd: cmd,
      args: args
    }, function(err, result, code) {
      if (err) {
        grunt.log.warn(err);
      }
      cb((code === 0 || !/Nothing to compile/g.test(result.stdout)) || result.stderr);
    }).on('exit', function(code){
      if (code === 127) {
        grunt.log.warn(
          'You need to have Ruby and Compass installed ' +
          'and in your system PATH for this task to work. ' +
          'More info: https://github.com/psyrendust/grunt-recursive-compass'
        );
      }
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
  }

  grunt.registerMultiTask('recursive-compass', 'Recursively compile Compass to CSS.', function() {
    var done = this.async();
    var options = this.options();
    var filesToProcess = [];
    var myArgs = ['compile'].concat(dargs(options));

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      filesToProcess = filesToProcess.concat(f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        }
        if (grunt.file.isFile(filepath)) {
          return !sassPartialReg.test(path.basename(filepath));
        }
        return false;
      }));
    });

    grunt.verbose.writeflags(options, 'Options');

    myArgs = myArgs.concat(filesToProcess);

    compile(myArgs, done);
  });

};
