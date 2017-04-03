'use strict';

angular.module('app.user', ['app.gameservice'])

.controller('UserController', ['$scope', 'gameService', function($scope, gameService) {

  $scope.setUserMove = function(userMove){
    var result = gameService.startRound(userMove)
    $scope.setWinner(result);
  }

}]);
