'use strict';

angular.module('app.gameservice', [])
    .constant('MOVES', ['ROCK', 'SCISSORS', 'PAPER'])
    .constant("OUTCOME", {
        WIN: "WIN",
        LOSS: "LOSS",
        TIE: "TIE"
    })
    .service('gameService', ['MOVES', 'OUTCOME', function(MOVES, OUTCOME) {

        this.startRound = function(userInput) {
            var computerMove = MOVES[RandomComputerMove()];
            var userMove = MOVES[userInput];

            var result = this.decideRound(userMove, computerMove);
            return {
                outcome: result,
                userMove: userMove,
                computerMove: computerMove
            }
        };

        this.decideRound = function(userMove, computerMove) {
            if (userMove == computerMove) {
                return OUTCOME.TIE
            } else if (userMove == MOVES[0]) {
                if (computerMove == MOVES[1]) {
                    return OUTCOME.WIN
                } else {
                    return OUTCOME.LOSS
                }
            } else if (userMove == MOVES[1]) {
                if (computerMove == MOVES[2]) {
                    return OUTCOME.WIN
                } else {
                    return OUTCOME.LOSS
                }
            } else if (computerMove == MOVES[0]) {
                return OUTCOME.WIN
            } else {
                return OUTCOME.LOSS
            }
        }

        var RandomComputerMove = function() {
            return Math.floor(Math.random() * 3) + 0
        }

    }]);
