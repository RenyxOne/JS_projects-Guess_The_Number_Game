class GuessTheNumberLogic {
    #secret; #guess; #maxAttempts; #attempt; results;
    constructor(secret, guess, maxAttempts) {
        this.#maxAttempts = maxAttempts;
        this.#attempt = null;
        this.#secret = secret;
        this.#guess = guess;
        this.results = {
            'Win' : {
                code: 0,
                msg: 'You WIN, congrats!'
            },
            'Lose': {
                code: 0,
                msg: 'You lose, Game Over'
            },
            'SecretIsGreater': {
                code: 1,
                msg: 'secret is greater!'
            },
            'SecretIsLower': {
                code: 1,
                msg: 'secret is lower'
            }
        }
        this.preGameMsg = `Welcome to the Guess The Number game.\nYou have ${this.#maxAttempts} lives, good luck!`;
    }

    prepareGame () {
        this.#attempt = 0;
        this.#secret.generateNum();
    }

    #compareUserAndComputerNums(){
        return this.#secret.getNum() - this.#guess.getNum();
    }

    round(){
        if (this.#attempt == this.#maxAttempts){
            return this.results['Lose'];
        }
        this.#attempt++;
        this.#guess.readNum();
        const roundResult = this.#compareUserAndComputerNums();
        if (roundResult === 0) {
            this.#attempt = this.#maxAttempts;
            return this.results['Win'];
        }
        if (roundResult > 0) {
            return this.results['SecretIsGreater'];
        }
        return this.results['SecretIsLower'];
    }
}
module.exports = GuessTheNumberLogic;
