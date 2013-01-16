var grunt = require('grunt');

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

exports['recursive-compass'] = {

  compileWithOptionsImportPath: function(test) {
    'use strict';

    test.expect(1);

    var compile_actual = grunt.file.read('test/fixtures/testImportPath.css');
    var compile_expected = grunt.file.read('test/expected/testImportPath.css');
    test.equal(compile_actual, compile_expected, "should compile CSS with importPath option set.");

    test.done();
  }

};
