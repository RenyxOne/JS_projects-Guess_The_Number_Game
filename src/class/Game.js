class Game {
    #writer; #gameLogic;
    constructor(output, gameLogic) {
        this.#writer = output;
        this.#gameLogic = gameLogic;
    }

    play () {
        this.#gameLogic.prepareGame();

        if ('preGameMsg' in this.#gameLogic){
            this.#writer.execute(this.#gameLogic.preGameMsg);
        }

        let gameIsOver = false;
        while (!gameIsOver){
            const roundResult = this.#gameLogic.round();
            this.#writer.execute(roundResult['msg']);
            if (roundResult['code'] === 0){
                gameIsOver = true;
            }
        }
    }
}
module.exports = Game;
