var AppDispatcher = require('../dispatcher/dispatcher'),
    ClientActions = require('../actions/client_actions'),
    GameConstants = require('../constant/game_constants'),
    Store = require('flux/utils').Store;

var GameStore = new Store(AppDispatcher);

var _currentGame = {};

var setGame = function(game){
  _currentGame[game.id] = game;
};

var removeGame = function(game) {
  delete _currentGame[game.id];
};

GameStore.currentGame = function() {
  return _currentGame;
};

GameStore.__onDispatch = function (payload){
    switch(payload.actionType){
      case(GameConstants.RECEIVED_GAME):
        setGame(payload.game);
        break;
      case(GameConstant.REMOVED_GAME):
        removeGame(payload.game);
        break;
    }
    this.__emitChange();
};

module.exports = GameStore;
