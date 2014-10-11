'use strict';

var grunt = require('grunt');
var path = require('path');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.test = {

  setUp: function (done) {
    // setup here if necessary
    done();
  },
  compileWithOptionsDefault: function(test) {
    test.expect(3);
    var expectedFoobar = grunt.file.read(path.join('test/expected/foobar-default.css'));
    var expectedFoo = grunt.file.read(path.join('test/expected/foo-default.css'));
    var expectedBar = grunt.file.read(path.join('test/expected/bar-default.css'));
    test.equal(grunt.file.read(path.join('tmp/fixtures/foobar-default.css')), expectedFoobar, 'should compile foobar-default.scss with default options.');
    test.equal(grunt.file.read(path.join('tmp/fixtures/test/foo-default.css')), expectedFoo, 'should compile foo-default.scss with default options.');
    test.equal(grunt.file.read(path.join('tmp/fixtures/test/bar-default.css')), expectedBar, 'should compile bar-default.scss with default options.');
    test.done();
  },
  compileWithOptionsCompact: function(test) {
    test.expect(3);
    var expectedFoobar = grunt.file.read(path.join('test/expected/foobar-compact.css'));
    var expectedFoo = grunt.file.read(path.join('test/expected/foo-compact.css'));
    var expectedBar = grunt.file.read(path.join('test/expected/bar-compact.css'));
    test.equal(grunt.file.read(path.join('tmp/fixtures/foobar-compact.css')), expectedFoobar, 'should compile foobar-compact.scss with compact option.');
    test.equal(grunt.file.read(path.join('tmp/fixtures/test/foo-compact.css')), expectedFoo, 'should compile foo-compact.scss with compact option.');
    test.equal(grunt.file.read(path.join('tmp/fixtures/test/bar-compact.css')), expectedBar, 'should compile bar-compact.scss with compact option.');
    test.done();
  },
  compileWithOptionsCompressed: function(test) {
    test.expect(3);
    var expectedFoobar = grunt.file.read(path.join('test/expected/foobar-compressed.css'));
    var expectedFoo = grunt.file.read(path.join('test/expected/foo-compressed.css'));
    var expectedBar = grunt.file.read(path.join('test/expected/bar-compressed.css'));
    test.equal(grunt.file.read(path.join('tmp/fixtures/foobar-compressed.css')), expectedFoobar, 'should compile foobar-compressed.scss with compressed option.');
    test.equal(grunt.file.read(path.join('tmp/fixtures/test/foo-compressed.css')), expectedFoo, 'should compile foo-compressed.scss with compressed option.');
    test.equal(grunt.file.read(path.join('tmp/fixtures/test/bar-compressed.css')), expectedBar, 'should compile bar-compressed.scss with compressed option.');
    test.done();
  },
  compileWithOptionsImportPath: function(test) {
    test.expect(1);
    var expectedImport = grunt.file.read(path.join('test/expected/test-import-path.css'));
    test.equal(grunt.file.read(path.join('tmp/fixtures/test-import-path.css')), expectedImport, 'should compile CSS with importPath option set.');
    test.done();
  }

};
