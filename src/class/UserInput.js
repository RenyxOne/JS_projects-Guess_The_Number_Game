class UserInput {
    #input;
    constructor(input) {
        this.#input = input;
    }
    execute() {
        return this.#input.question();
    }
}
module.exports = UserInput;
