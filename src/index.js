const colors = require('./colors');

class Markers {
    constructor() {
        this.args = [];
    }

    /* styles */

    get reset() { 
        return colors.reset;
    }

    get bright() { 
        this.args.push(colors.bright);
        return this;
    }

    get bold() {
        return this.bright;
    }

    get underscore() { 
        this.args.push(colors.underscore);
        return this;
    }

    /* colors */

    get black() { 
        this.args.push(colors.black);
        return this;
    }

    get red() { 
        this.args.push(colors.red);
        return this;
    }

    get green() { 
        this.args.push(colors.green);
        return this;
    }

    get yellow() { 
        this.args.push(colors.yellow);
        return this;
    }

    get blue() { 
        this.args.push(colors.blue);
        return this;
    }

    get magenta() { 
        this.args.push(colors.magenta);
        return this;
    }

    get cyan() { 
        this.args.push(colors.cyan);
        return this;
    }

    get white() { 
        this.args.push(colors.white);
        return this;
    }

    /* background */

    get bgBlack() {
        this.args.push(colors.bgBlack);
        return this;
    }

    get bgRed() {
        this.args.push(colors.bgRed);
        return this;
    }
    
    get bgGreen() {
        this.args.push(colors.bgGreen);
        return this;
    }

    get bgYellow() {
        this.args.push(colors.bgYellow);
        return this;
    }

    get bgBlue() {
        this.args.push(colors.bgBlue);
        return this;
    }
    
    get bgMagenta() {
        this.args.push(colors.bgMagenta);
        return this;
    }

    get bgCyan() {
        this.args.push(colors.bgCyan);
        return this;
    }

    get bgWhite () {
        this.args.push(colors.bgWhite);
        return this;
    }

    /* format string */
    
    text(m) {
        const temp = this.args;
        this.args = [];
        return temp.join('') + m + this.reset;
    }
}

module.exports = Markers;