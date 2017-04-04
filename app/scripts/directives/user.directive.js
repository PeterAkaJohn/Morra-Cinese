'use strict';

angular.module('app.user.directive', [])
.directive('gameBox', function() {
  return {
    restrict: 'EA',
    templateUrl: '../views/game-box.html'
  };
});
