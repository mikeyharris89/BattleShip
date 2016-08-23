var PlayerApiUtil = require('../util/player_api_util'),
    AppDispatcher = require('../dispatcher/dispatcher'),
    PlayerConstants = require('../constants/player_constants');

var PlayerActions = {

  receiveSinglePlayer: function(player) {
    AppDispatcher.dispatch({
      actionType: PlayerConstants.RECEIEVED_PLAYER,
      player: player
    });
  },

  removePlayer: function(player) {
    AppDispatcher.dispatch({
      actionType: PlayerConstants.REMOVED_PLAYER,
      player: player
    });
  }
};

module.exports = PlayerActions;
