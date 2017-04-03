describe('GameController', function(){
  beforeEach(angular.mock.module('app.game'))
  var $controller;
  var OUTCOME = ['WIN', 'LOSS', 'TIE']
  var MOVES = ['ROCK','SCISSORS', 'PAPER']
  var result = {}

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('should be defined', function(){
    expect($controller).toBeDefined();
  });

  describe('$scope variables and reset function', function(){

    beforeEach(function(){
      $scope = {};
      controller = $controller('GameController', { $scope: $scope});
    });

    it('set wins for both the user and the computer', function(){
      $scope.userWin = 12;
      $scope.computerWin = 10;
      expect($scope.userWin).toBeGreaterThan($scope.computerWin);
    });

    it('reset the wins', function(){
      $scope.userWin = 12;
      $scope.computerWin = 10;
      expect($scope.userWin).toBeGreaterThan($scope.computerWin);
      $scope.reset();
      expect($scope.userWin).toEqual(0);
      expect($scope.computerWin).toEqual(0);
    });

    it('should increase the number on wins on the winner', inject(function($timeout){
      var result = {
        outcome: OUTCOME[0],
        userMove: MOVES[0],
        computerMove: MOVES[1]
      }
      //WIN
      $scope.setWinner(result);
      $timeout.flush();
      expect($scope.userWin).toEqual(1);

      //LOSS
      result.outcome = OUTCOME[1];
      result.computerMove = MOVES[2];
      $scope.setWinner(result);
      $timeout.flush();
      expect($scope.computerWin).toEqual(1);
      $scope.reset();

      //TIE
      result.outcome = OUTCOME[2];
      result.computerMove = MOVES[0];
      $scope.setWinner(result);
      $timeout.flush();
      expect($scope.userWin && $scope.computerWin).toEqual(0);
    }))
  })


})
