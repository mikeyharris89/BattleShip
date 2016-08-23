var AppDispatcher = require('../dispatcher/dispatcher'),
    ClientActions = require('../actions/client_actions'),
    PlayerConstants = require('../constant/player_constants'),
    Store = require('flux/utils').Store;

var PlayerStore = new Store(AppDispatcher);

var _currentPlayer = {};

var setPlayer = function(player){
  _currentPlayer[player.id] = player;
};

var removePlayer = function(player) {
  delete _currentPlayer[player.id];
};

PlayerStore.currentPlayer = function() {
  return _currentPlayer;
};

PlayerStore.__onDispatch = function (payload){
    switch(payload.actionType){
      case(PlayerConstants.RECEIVED_PLAYER):
        setPlayer(payload.player);
        break;
      case(PlayerConstant.REMOVED_PLAYER):
        removePlayer(payload.player);
        break;
    }
    this.__emitChange();
};

module.exports = PlayerStore;
