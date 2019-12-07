const Markers = require('../src/index');

const M = new Markers();

console.log(M.bright.text('bright (bold) text'));
console.log(M.underscore.text('underscored text'));
console.log(M.bright.underscore.text('Bold and underscored.'));