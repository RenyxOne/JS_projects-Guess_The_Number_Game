const consoleInput = require("readline-sync");
const UserInput = require("./class/UserInput")
const ConsoleWrite = require("./class/ConsoleWrite");
const Secret = require("./class/Secret");
const Guess = require("./class/Guess");
const GuessTheNumberLogic = require("./class/GuessTheNumberLogic");
const Game = require("./class/Game");

const userInput = new UserInput(consoleInput);
const userOutput = new ConsoleWrite();
const secret = new Secret(0,100);
const guess = new Guess(userInput, userOutput);
const guessTheNumberLogic = new GuessTheNumberLogic(secret, guess, 5);

const game = new Game(userOutput, guessTheNumberLogic);

game.play()

