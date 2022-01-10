const consoleInput = require("readline-sync");
const UserInput = require("./class/UserInput")
const ConsoleWrite = require("./class/ConsoleWrite");
const SecretGenerator = require("./class/SecretGenerator");
const Guess = require("./class/Guess");
const GuessTheNumberLogic = require("./class/GuessTheNumberLogic");
const Game = require("./class/Game");

const userInput = new UserInput(consoleInput);
const userOutput = new ConsoleWrite();
const secretGenerator = new SecretGenerator();
const guess = new Guess(userInput, userOutput);
const guessTheNumberLogic = new GuessTheNumberLogic(secretGenerator, guess, 5);

const game = new Game(userOutput, guessTheNumberLogic);

game.play()

