## Documentation

Compass operates on a folder level, because of this you don't specify any src/dest, but instead define the `sassDir` and `cssDir` options. In the case of `grunt-recursive-compass` you can also supply it a set of files for it to process or exclude. Because of this you are able to achieve fine detail over what you would like to process.

_Note that this release will recompile all files passed to the task when setup with a [grunt-contrib-watch v0.1.4][watch014] task._

_`grunt-recursive-compass@0.2.x` will support `grunt@0.4.x`. This version will compile only the changed files when setup with a [grunt-contrib-watch v0.2.x][watch02x] task._
