'use strict';

angular.module('app.computer.directive', [])
.directive('compBox', function() {
  return {
    restrict: 'EA',
    templateUrl: '../views/comp-box.html'
  };
});
