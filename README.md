# grunt-recursive-compass [![Build Status](https://travis-ci.org/psyrendust/grunt-recursive-compass.png?branch=master)](https://travis-ci.org/psyrendust/grunt-recursive-compass)

A custom [Grunt][grunt] plugin that will recursively execute a [Compass][compass] compile for selected sass/scss files.

# Grunt Compatibility

* `grunt-recursive-compass@0.2.x` is compatible with `grunt >= 0.4.x`

## Getting Started
Install this grunt plugin next to your project's [Gruntfile.js][getting_started] with:

```shell
npm install grunt-recursive-compass --save-dev
```

Then add this line to your project's `Gruntfile.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-recursive-compass');
```

## Documentation

Compass operates on a folder level, because of this you don't specify any src/dest, but instead define the `sassDir` and `cssDir` options. In the case of `grunt-recursive-compass` you can also supply it a set of files for it to process or exclude. Because of this you are able to achieve fine detail over what you would like to process.

_Note that this release will recompile all files passed to the task when setup with a [grunt-contrib-watch v0.6.x][watch] task._

_`grunt-recursive-compass@0.2.x` will support `grunt@0.4.x`. This version will compile only the changed files when setup with a [grunt-contrib-watch v0.6.x][watch] task._

### Example config

```javascript
/**
 * grunt-recursive-compass
 * https://github.com/psyrendust/grunt-recursive-compass/
 *
 * Copyright (c) 2014 Larry Gordon
 * http://psyrendust.mit-license.org/2014/license.html
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    'recursive-compass': {
      dev: {
        src: ['test/fixtures/**/*.{scss,sass}'],
        options: {
          outputStyle: 'expanded',
          sassDir: 'test/fixtures',
          cssDir: 'test/fixtures'
        }
      },
      build: {
        src: ['test/fixtures/**/*.{scss,sass}'],
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
        tasks: ['recursive-compass:dev']
      }
    }

  });

  // Load the module
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recursive-compass');

  // Default task.
  grunt.registerTask('default', 'recursive-compass:build');

};

```

### Example usage

#### Add file exclusions.

```javascript
'recursive-compass': {
  target: {
    src: [
      'test/fixtures/**/*.{scss,sass}',
      '!test/fixtures/**/foo.{scss,sass}'
    ]
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
    src: ['test/fixtures/**/*.{scss,sass}'],
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
      src: ['test/fixtures/**/*.{scss,sass}'],
      options: {
        outputStyle: 'expanded',
        sassDir: 'test/fixtures',
        cssDir: 'test/fixtures'
      }
    },
    build: {
      src: ['test/fixtures/**/*.{scss,sass}'],
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
      tasks: ['recursive-compass']
    }
  }
});
```


### Options

> This controls how this task (and its helpers) operate and should contain key:value pairs, see [options](#options2) below.

Compass doesn't expose all of its [options][config] through the CLI, which this task makes use of. Not all [Compass][compass] options are available. This plugin does not support a config.rb file or the `raw` option.

#### noSourcemap
Type: `String`
> Generate a sourcemap during compilation.

#### time
Type: `String`
> Display compilation times.

#### debugInfo
Type: `String`
> Turns on sass's debuging information

#### noDebugInfo
Type: `String`
> Turns off sass's debuging information

#### require
Type: `String`
> Require the given ruby `LIBRARY` before running commands. This is used to access compass plugins without having a project configuration file.

#### load
Type: `String`
> Load the framework or extensions found in the `FRAMEWORK` directory.

#### loadAll
Type: `String`
> Load all the frameworks or extensions found in the `FRAMEWORKS_DIR` directory.

#### importPath
Type: `String`
> Makes files under the IMPORT_PATH folder findable by Sass's @import directive.

#### quiet
Type: `String`
> Quiet mode.

#### trace
Type: `String`
> Show a full stacktrace on error

#### force
Type: `String`
> Allows compass to overwrite existing files.

#### boring
Type: `String`
> Turn off colorized output.

#### config
Type: `String`
> Specify the location of the configuration file explicitly.

#### app
Type: `String`
> Tell compass what kind of application it is integrating with. Can be `stand_alone` (default) or `rails`.

#### appDir
Type: `String`
> The base directory for your application.

#### sassDir
Type: `String`
> The source directory where you keep your sass stylesheets.

#### cssDir
Type: `String`
> The target directory where you keep your css stylesheets.

#### imagesDir
Type: `String`
> The directory where you keep your images.

#### javascriptsDir
Type: `String`
> The directory where you keep your javascripts.

#### fontsDir
Type: `String`
> The directory where you keep your fonts.

#### environment
Type: `String`
> Use sensible defaults for your current environment. One of: `development` (default), `production`.

#### outputStyle
Type: `String`
> Select a CSS output mode. One of: `nested`, `expanded`, `compact`, `compressed`.

#### relativeAssets
Type: `String`
> Make compass asset helpers generate relative urls to assets.

#### noLineComments
Type: `String`
> Disable line comments.

#### httpPath
Type: `String`
> Set this to the root of your project when deployed

#### generatedImagesPath
Type: `String`
> The path where you generate your images


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## Testing

To run the Nodeunit test suite use the default grunt task:

```javascript
grunt
```


## License

[MIT](http://psyrendust.mit-license.org/2014/license.html) © [Larry Gordon](https://github.com/psyrendust)


[psyrendust]: https://github.com/psyrendust
[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md
[watch]: https://github.com/gruntjs/grunt-contrib-watch
[compass]: http://compass-style.org/
