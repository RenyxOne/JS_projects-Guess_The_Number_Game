const Secret = require("./Secret");
class SecretGenerator {
    generateSecret () {
        return new Secret();
    }
}
module.exports = SecretGenerator;
