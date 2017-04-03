'use strict';

angular.module('app.user.directive', [])
.directive('gameBox', function() {
  return {
    templateUrl: '../views/game-box.html',
    controller: 'UserController'
  };
});
