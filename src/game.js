const consoleInput = require("readline-sync");

class UserInput {
    #input;
    constructor(input) {
        this.#input = input;
    }
    execute() {
        return this.#input.question();
    }
}
class ConsoleWrite {
    execute(text){
        console.log(text);
    }
}
class Secret {
    #num;
    constructor() {
        this.generateNum();
    }
    generateNum(){
        this.#num = Math.floor(Math.random() * 100);
    }
    getNum () {
        return this.#num;
    }
}
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
            this.readNum();
        } else {
            this.setNum(num);
        }
    }
    setNum(value){
        this.#num = value;
    }
    getNum () {
        return this.#num;
    }
}
class Game {
    #writer; #secret; #guess; #maxAttempts; #attempt; #endGameMsg;
    constructor(output, secret, guess, maxAttempts) {
        this.#reader = input;
        this.#writer = output;
        this.#maxAttempts = maxAttempts;
        this.#attempt = null;
        this.#secret = secret;
        this.#guess = guess;
    }
    #compareUserAndComputerNums(){
        const secretNum = this.#secret.getNum();
        const guessNum = this.#guess.getNum();
        return secretNum - guessNum;
    }
    play () {
        this.#writer.execute('Welcome to the Guess the number game');
        this.#writer.execute(`You have only ${this.#maxAttempts}, good luck!`);
        this.#secret.generateNum();
        this.#attempt = 0;
        this.#endGameMsg = '!GAME_OVER!';
        while (this.#attempt < this.#maxAttempts) {
            this.#attempt++;
            this.#guess.readNum();
            const roundResult = this.#compareUserAndComputerNums();
            if (roundResult === 0) {
                this.#attempt = this.#maxAttempts;
                this.#endGameMsg = 'You WIN, congrats!';
            } else if (roundResult > 0) {
                this.#writer.execute('secret is greater');
            } else {
                this.#writer.execute('secret is lower');
            }
        }
        this.#writer.execute(this.#endGameMsg);
        this.#attempt = null;
    }
}

const userInput = new UserInput(consoleInput);
const userOutput = new ConsoleWrite();
const secret = new Secret();
const guess = new Guess(userInput, userOutput);

const game = new Game(userOutput, secret, guess, 5);

game.play()

