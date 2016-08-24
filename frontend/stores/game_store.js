var AppDispatcher = require('../dispatcher/dispatcher'),
    GameConstants = require('../constants/game_constants'),
    Store = require('flux/utils').Store;

var GameStore = new Store(AppDispatcher);

var _currentGame;

var setGame = function(game){
  _currentGame = game;
};

var removeGame = function(game) {
  _currentGame = null;
};

GameStore.currentGame = function() {
  return _currentGame;
};

GameStore.__onDispatch = function (payload){
    switch(payload.actionType){
      case(GameConstants.RECEIVED_GAME):
        setGame(payload.game);
        break;
      case(GameConstants.REMOVED_GAME):
        removeGame(payload.game);
        break;
    }
    this.__emitChange();
};

module.exports = GameStore;
