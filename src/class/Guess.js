class Guess {
    #num; #input; #output;
    constructor(input, output) {
        this.#num = null;
        this.#input = input;
        this.#output = output;
    }
    readNum () {
        this.#output.execute('Input your number');
        const num = parseInt(this.#input.execute());
        if (num < 0 || num > 100 || Number.isNaN(num)) {
            this.#output.execute('incorrect input, try again');
            return this.readNum();
        }
        this.setNum(num);
    }
    setNum(value){
        this.#num = value;
    }
    getNum () {
        return this.#num;
    }
}
module.exports = Guess;
