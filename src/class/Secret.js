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
module.exports = Secret;
