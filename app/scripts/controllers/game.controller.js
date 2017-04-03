'use strict';

angular.module('app.game', [])

// implement the IndexController and About Controller here
.controller('GameController', ['$scope','$timeout', function($scope, $timeout) {
  $scope.userWin = 0;
  $scope.computerWin = 0;
  $scope.result = 'Choose Rock, Paper, Scissors!!!';

  $scope.setWinner = function(result){
    console.log(result);
    $scope.result = result.userMove + ' vs.' + result.computerMove;
    $timeout(function(){
      if (result.outcome == 'WIN') {
        $scope.userWin++;
        $scope.result = 'You win';
      } else if (result.outcome == 'LOSS') {
        $scope.computerWin++;
        $scope.result = 'You lose';
      } else {
        $scope.result = 'Tie';
      }
    }, 1000);
  };

  $scope.reset = function(){
    $scope.userWin = 0;
    $scope.computerWin = 0;
    $scope.result = 'Choose Rock, Paper, Scissors!!!';
  }

}]);
