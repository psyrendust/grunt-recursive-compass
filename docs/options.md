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
