class Secret {
    #num;
    #min;
    constructor() {
        this.#num = null;
    }
    generateNum(){
        this.#num = Math.floor(Math.random() * 100);
    }
    getNum () {
        return this.#num;
    }
}
module.exports = Secret;
