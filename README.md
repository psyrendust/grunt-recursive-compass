# grunt-recursive-compass [![Build Status](https://travis-ci.org/psyrendust/grunt-recursive-compass.png?branch=master)](https://travis-ci.org/psyrendust/grunt-recursive-compass)

> A custom [grunt.js][grunt] plugin that will recursively execute a [Compass][compass] compile for selected sass/scss files.

# Grunt Compatibility

* `grunt-recursive-compass@0.1.x` is compatible with `grunt >= 0.3.x`

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with:

```shell
npm install grunt-recursive-compass --save-dev
```

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-recursive-compass');
```

## Documentation

Compass operates on a folder level, because of this you don't specify any src/dest, but instead define the `sassDir` and `cssDir` options. In the case of `grunt-recursive-compass` you can also supply it a set of files for it to process or exclude. Because of this you are able to achieve fine detail over what you would like to process.

_Note that this release will recompile all files passed to the task when setup with a [grunt-contrib-watch v0.1.4][watch014] task._

_`grunt-recursive-compass@0.2.x` will support `grunt@0.4.x`. This version will compile only the changed files when setup with a [grunt-contrib-watch v0.2.x][watch02x] task._

### Example config

```javascript
/**
 * grunt-recursive-compass
 * https://github.com/psyrendust/grunt-recursive-compass/
 *
 * Copyright (c) 2012 Larry Gordon
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    'recursive-compass': {
      dev: {
        files: 'test/fixtures/**/*.{scss,sass}',
        options: {
          outputStyle: 'expanded',
          sassDir: 'test/fixtures',
          cssDir: 'test/fixtures'
        }
      },
      build: {
        files: 'test/fixtures/**/*.{scss,sass}',
        options: {
          outputStyle: 'compressed',
          sassDir: 'test/fixtures',
          cssDir: 'test/fixtures'
        }
      }
    },

    watch: {
      dev: {
        files: [
          'test/fixtures/**/*.{scss,sass}'
        ],
        tasks: 'recursive-compass watch:dev'
      }
    }

  });

  // Load the module
  grunt.loadNpmTasks('grunt-recursive-compass');

  // Default task.
  grunt.registerTask('default', 'lint recursive-compass:build');

};

```

### Example usage

#### Add files as an Array.

Can be a string or an array of files and/or minimatch patterns.

```javascript
'recursive-compass': {
  target: {
    files: [
      'test/fixtures/**/*.{scss,sass}'
    ],
    options: {
      sassDir: 'test/fixtures',
      cssDir: 'test/fixtures'
    }
  }
}
```

#### Add files as a String.

Can be a string or an array of files and/or minimatch patterns.

```javascript
'recursive-compass': {
  target: {
    files: 'test/fixtures/**/*.{scss,sass}',
    options: {
      sassDir: 'test/fixtures',
      cssDir: 'test/fixtures'
    }
  }
}
```

#### Add file exclusions.

Can be a string or an array of files and/or minimatch patterns.

```javascript
'recursive-compass': {
  target: {
    files: 'test/fixtures/**/*.{scss,sass}',
    exclude: [
      'test/fixtures/**/foo.{scss,sass}'
    ],
    options: {
      sassDir: 'test/fixtures',
      cssDir: 'test/fixtures'
    }
  }
}
```

#### Add Compass options.

For a full list of Compass options see [Parameters](#parameters) below.

```javascript
'recursive-compass': {
  target: {
    files: 'test/fixtures/**/*.{scss,sass}',
    options: {
      outputStyle: 'compressed',
      sassDir: 'test/fixtures',
      cssDir: 'test/fixtures'
    }
  }
}
```

#### Set a watch task to recompile SASS files.

```javascript
grunt.initConfig({
  'recursive-compass': {
    dev: {
      files: 'test/fixtures/**/*.{scss,sass}',
      options: {
        outputStyle: 'expanded',
        sassDir: 'test/fixtures',
        cssDir: 'test/fixtures'
      }
    },
    build: {
      files: 'test/fixtures/**/*.{scss,sass}',
      options: {
        outputStyle: 'compressed',
        sassDir: 'test/fixtures',
        cssDir: 'test/fixtures'
      }
    }
  },

  watch: {
    dev: {
      files: [
        'test/fixtures/**/*.{scss,sass}'
      ],
      tasks: 'recursive-compass watch:dev'
    }
  }
});
```

### Parameters

#### files
Type: `String|Array`
> This defines what file patterns this task will process. Can be a string or an array of files and/or minimatch patterns.


#### exclude
Type: `String|Array`
> This defines what file patterns this task will exclude from the process. Can be a string or an array of files and/or minimatch patterns.


#### options
Type: `Object`
> This controls how this task (and its helpers) operate and should contain key:value pairs, see [options](#options2) below.


### Options

Compass doesn't expose all of its [options][config] through the CLI, which this task makes use of. Not all [Compass][compass] options are available. This plugin does not support a config.rb file or the `raw` option.

#### app
Type: `String`
> Tell compass what kind of application it is integrating with. Can be `stand_alone` (default) or `rails`.

#### sassDir
Type: `String`
> The source directory where you keep your Sass stylesheets.

#### cssDir
Type: `String`
> The target directory where you keep your CSS stylesheets.

#### imagesDir
Type: `String`
> The directory where you keep your images.

#### javascriptsDir
Type: `String`
> The directory where you keep your JavaScript files.

#### fontsDir
Type: `String`
> The directory where you keep your fonts.

#### environment
Type: `String`
> Use sensible defaults for your current environment. Can be: `development` (default) or `production`

#### outputStyle
Type: `String`
> CSS output mode. Can be: `nested`, `expanded`, `compact`, `compressed`.

#### relativeAssets
Type: `Boolean`
> Make Compass asset helpers generate relative urls to assets.

#### noLineComments
Type: `Boolean`
> Disable line comments.

#### require
Type: `String|Array`
> Require the given Ruby library before running commands. This is used to access Compass plugins without having a project configuration file.

#### load
Type: `String|Array`
> Load the framework or extensions found in the specified directory.

#### loadAll
Type: `String|Array`
> Load all the frameworks or extensions found in the specified directory.

#### importPath
Type: `String|Array`
> Makes files under the specified folder findable by Sass's @import directive.

#### quiet
Type: `Boolean`
> Quiet mode.

#### trace
Type: `Boolean`
> Show a full stacktrace on error.

#### force
Type: `Boolean`
> Allows Compass to overwrite existing files.

#### dryRun
Type: `Boolean`
> Dry Run. Tells you what it plans to do.

#### boring
Type: `Boolean`
> Turn off colorized output.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Testing
To run the Nodeunit test suite use the default grunt task:

```javascript
grunt
```

## Release History
 * 2013-10-15   v0.1.4   Converts '--import-path' option to '-I'.
 * 2013-10-15   v0.1.3   Fixed broken tests on Travis-CI.
 * 2013-10-15   v0.1.2   Fixed broken tests on Travis-CI.
 * 2013-10-14   v0.1.1   Pruned usused packages. Updated broken dependencies.
 * 2013-10-14   v0.1.0   Initial release.

## License
Copyright (c) 2013 Larry Gordon
Licensed under the MIT license.

[psyrendust]: https://github.com/psyrendust
[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md
[watch014]: https://github.com/gruntjs/grunt-contrib-watch/tree/grunt-3.0-stable
[watch02x]: https://github.com/gruntjs/grunt-contrib-watch
[compass]: http://compass-style.org/

---
Task submitted by [Larry Gordon][psyrendust]
