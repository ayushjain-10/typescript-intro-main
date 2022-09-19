"use strict";
// Use the enum type to define the suit for 
// a playing card. 
// Below define the ace. It should have a suit
// and a value.
exports.__esModule = true;
exports.Suit = void 0;
// Check the docs and define your enum below
// https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content
var Suit;
(function (Suit) {
    Suit[Suit["Spades"] = 0] = "Spades";
    Suit[Suit["Clubs"] = 1] = "Clubs";
    Suit[Suit["Hearts"] = 2] = "Hearts";
    Suit[Suit["Diamonds"] = 3] = "Diamonds";
})(Suit || (Suit = {}));
exports.Suit = Suit;
var ace = { suit: Suit.Spades, value: 1 };
