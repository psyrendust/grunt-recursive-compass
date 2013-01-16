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

  compileWithOptionsCompact: function(test) {
    'use strict';

    test.expect(3);

    var compile_actual = grunt.file.read('test/fixtures/compile.css');
    var compile_expected = grunt.file.read('test/expected/compile_compact.css');
    test.equal(compile_actual, compile_expected, "should compile compile.scss with compact option");

    var foo_actual = grunt.file.read('test/fixtures/test/foo.css');
    var foo_expected = grunt.file.read('test/expected/foo_compact.css');
    test.equal(foo_actual, foo_expected, "should compile foo.scss with compact option");

    var test_actual = grunt.file.read('test/fixtures/test/test.css');
    var test_expected = grunt.file.read('test/expected/test_compact.css');
    test.equal(test_actual, test_expected, "should compile test.scss with compact option");

    test.done();
  }

};