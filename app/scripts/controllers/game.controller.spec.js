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

    it('reset the wins, $scope variables', function(){
      $scope.userWin = 12;
      $scope.computerWin = 10;
      $scope.showComputer = true;
      $scope.showUser = true;
      $scope.computerMove = 'test';
      $scope.userMove = 'test';
      expect($scope.userWin).toBeGreaterThan($scope.computerWin);
      $scope.reset();
      expect($scope.userMove).toEqual('');
      expect($scope.computerMove).toEqual('');
      expect($scope.showComputer).toBe(false);
      expect($scope.showUser).toBe(false);
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
      expect($scope.showComputer).toBe(true);
      expect($scope.showUser).toBe(true);
      expect($scope.userMove).toEqual(result.userMove);
      expect($scope.computerMove).toEqual(result.computerMove);

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

      $scope.reset();
    }));

    it('should start the round and call setWinner', inject(function($timeout){
      $scope.computerMove = 'test';
      $scope.userMove = 'test';
      $scope.showComputer = true;
      $scope.showUser = true;
      $scope.start(0);
      $timeout.flush();
      expect($scope.userMove).toEqual('ROCK');
      expect(MOVES).toContain($scope.computerMove);
    }));
  })


})
