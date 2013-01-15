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
