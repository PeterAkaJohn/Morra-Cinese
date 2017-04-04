'use strict';

angular.module('app.constant', [])
    .constant('MOVES', ['ROCK', 'SCISSORS', 'PAPER'])
    .constant("OUTCOME", {
        WIN: "WIN",
        LOSS: "LOSS",
        TIE: "TIE"
    })
