var AppDispatcher = require('../dispatcher/dispatcher'),
    ClientActions = require('../actions/client_actions'),
    PlayerConstants = require('../constants/player_constants'),
    Store = require('flux/utils').Store;

var PlayerStore = new Store(AppDispatcher);

var _currentPlayer;

var setPlayer = function(player){
  _currentPlayer = player;
};

var removePlayer = function(player) {
  _currentPlayer = null;
};

PlayerStore.currentPlayer = function() {
  return _currentPlayer;
};

PlayerStore.__onDispatch = function(payload) {
    switch(payload.actionType){
      case(PlayerConstants.RECEIVED_PLAYER):
        setPlayer(payload.player);
        break;
      case(PlayerConstants.REMOVED_PLAYER):
        removePlayer(payload.player);
        break;
    }
    this.__emitChange();
};

window.PlayerStore = PlayerStore;
module.exports = PlayerStore;
