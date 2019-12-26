const colors = require('./colors');

class Markers {
    constructor() {
        this.args = [];
    }

    /* styles */

    get dim() {
        return this.args.push(colors.dim), this;
    }
    get reverse() {
        return this.args.push(colors.reverse), this;
    }
    get hidden() {
        return this.args.push(colors.hidden), this;
    }
    get bold() {
        return this.args.push(colors.bright), this;
    }
    get reset() {
        return colors.reset;
    }
    get underscore() {
        return this.args.push(colors.underscore), this;
    }

    /* colors */

    get black() { 
        return this.args.push(colors.black), this;
    }
    get red() { 
        return this.args.push(colors.red), this;
    }
    get green() { 
        return this.args.push(colors.green), this;
    }
    get yellow() { 
        return this.args.push(colors.yellow), this;
    }
    get blue() { 
        return this.args.push(colors.blue), this;
    }
    get magenta() { 
        return this.args.push(colors.magenta), this;
    }
    get cyan() { 
        return this.args.push(colors.cyan), this;
    }
    get white() { 
        return this.args.push(colors.white), this;
    }

    /* background */

    get bgBlack() {
        return this.args.push(colors.bgBlack), this;
    }
    get bgRed() {
        return this.args.push(colors.bgRed), this;
    }
    get bgGreen() {
        return this.args.push(colors.bgGreen), this;
    }
    get bgYellow() {
        return this.args.push(colors.bgYellow), this;
    }
    get bgBlue() {
        return this.args.push(colors.bgBlue), this;
    }
    get bgMagenta() {
        return this.args.push(colors.bgMagenta), this;
    }
    get bgCyan() {
        return this.args.push(colors.bgCyan), this;
    }
    get bgWhite () {
        return this.args.push(colors.bgWhite), this;
    }

    /* functions */

    text(m = '') {
        const temp = this.args.concat(m, this.reset);
        return this.args = [], temp.join('');
    }
}

module.exports = Markers;