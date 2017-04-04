describe('Game service', function() {
  var gameService;
  var OUTCOME = ['WIN', 'LOSS', 'TIE']
  var MOVES = ['ROCK','SCISSORS', 'PAPER']
  beforeEach(angular.mock.module('app.gameservice'))

  beforeEach(inject(function(_gameService_){
    gameService = _gameService_
  }));

  it('should exist', function(){
    expect(gameService).toBeDefined()
  });

  it('should return an Object indicating a result', function(){
    var result = gameService.startRound(1);
    expect(result.userMove).toEqual(MOVES[1]);
    expect(MOVES).toContain(result.computerMove);
    expect(OUTCOME).toContain(result.outcome);
  });

  it('should return WIN', function(){
    var result = gameService.decideRound(MOVES[1],MOVES[2]);
    expect(result).toEqual(OUTCOME[0]);
  });
  it('should return LOSS', function(){
    var result = gameService.decideRound(MOVES[1],MOVES[0]);
    expect(result).toEqual(OUTCOME[1]);
  });
  it('should return TIE', function(){
    var result = gameService.decideRound(MOVES[1],MOVES[1]);
    expect(result).toEqual(OUTCOME[2]);
  });
});
