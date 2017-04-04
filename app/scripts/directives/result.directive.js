'use strict';

angular.module('app.result.directive', [])
.directive('resultSection', function() {
  return {
    restrict: 'EA',
    templateUrl: '../views/result.html'
  };
});
