const Markers = require('../src/index');

const M = new Markers();

console.log(M.bgBlack.text('black'));
console.log(M.bgRed.text('red'));
console.log(M.bgGreen.text('green'));
console.log(M.bgYellow.text('yellow'));
console.log(M.bgBlue.text('blue'));
console.log(M.bgMagenta.text('magenta'));
console.log(M.bgCyan.text('cyan'));
console.log(M.bgWhite.text('white'));