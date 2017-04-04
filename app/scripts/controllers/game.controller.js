'use strict';

angular.module('app.game', ['app.gameservice', 'app.constant'])

// implement the IndexController and About Controller here
.controller('GameController', ['$scope','$timeout', 'gameService', 'MOVES', function($scope, $timeout, gameService, MOVES) {
  $scope.MOVES = MOVES;
  $scope.userWin = 0;
  $scope.computerWin = 0;
  $scope.userMove;
  $scope.computerMove;
  $scope.showComputer = false;
  $scope.showUser = false;
  $scope.result = 'Choose Rock, Paper, Scissors!!!';

  $scope.setWinner = function(roundResult){
    $scope.userMove = roundResult.userMove;
    $scope.computerMove = roundResult.computerMove;
    $scope.showComputer = true;
    $scope.showUser = true;
    $scope.result = roundResult.userMove + ' vs.' + roundResult.computerMove;
    $timeout(function(){
      switch (roundResult.outcome) {
        case 'WIN':
          $scope.userWin++;
          $scope.result = 'You win';
          break;
        case 'LOSS':
          $scope.computerWin++;
          $scope.result = 'You lose';
          break;
        default:
          $scope.result = 'Tie';
      }
    }, 1000);
  };

  $scope.start = function(userMove){
    $scope.computerMove = '';
    $scope.userMove = '';
    $scope.showComputer = false;
    $scope.showUser = false;
    var roundResult = gameService.startRound(userMove)
    $scope.setWinner(roundResult);
  }

  $scope.reset = function(){
    $scope.userWin = 0;
    $scope.computerWin = 0;
    $scope.computerMove = '';
    $scope.userMove = '';
    $scope.showComputer = false;
    $scope.showUser = false;
    $scope.result = 'Choose Rock, Paper, Scissors!!!';
  }

}]);
