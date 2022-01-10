class SecretGenerator {
    #Secret;
    constructor(Secret) {
        this.#Secret = Secret;
    }
    generateSecret () {
        return new this.#Secret();
    }
}
module.exports = SecretGenerator;
