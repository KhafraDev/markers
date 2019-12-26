# Markers
ANSI console styles and colored texts.

# Browser support?
* Not coming anytime soon, feel free to fork or submit a PR to add support.

# Class-Based Example
```js
const Markers = require('markers/class');
const M = new Markers();

console.log(M.green.bgRed.underscore.bold.text('hello, world!'));
console.log(M.yellow.underscore.bold.text('day'), 'and', M.black.bgWhite.text('night'));
```

# Object-Based Example
* This option is the default export.
```js
const Markers = require('markers');

console.log(Markers.green.bgRed.underscore.bold.text('hello, world!'));
console.log(Markers.yellow.underscore.bold.text('day'), 'and', Markers.black.bgWhite.text('night'));
```

# Benefits over x,y,z
* No dependencies.
* Fast.
* Uses Chalk-like "magic properties".
* Class and Object based variants!
