# Markers
ANSI console styles and colored texts.

# Browser support?
* Not coming anytime soon, feel free to fork or submit a PR to add support.

# Example
```js
const Markers = require('markers');
const M = new Markers();

console.log(M.green.bgRed.underscore.bold.text('hello, world!'));
console.log(M.yellow.underscore.bold.text('day'), 'and', M.black.bgWhite.text('night'));
```
Styles can be stacked, if colors are stacked it will be overwritten with the last one.
You can have multiple strings in one instance of ``Markers``.

# Benefits over x,y,z
* No dependencies.
* Easy to use and similar (simple) syntax.
* +/- I wrote this in an hour.

# License (MIT)
View it [here](./LICENSE).

# Tests
Included [here](./test). Tests include styles, colors, and background colors.
