var GameApiUtil = require('../util/game_api_util'),
    AppDispatcher = require('../dispatcher/dispatcher'),
    GameConstants = require('../constants/game_constants');

var GameActions = {

  receiveSingleGame: function(game) {
    AppDispatcher.dispatch({
      actionType: GameConstants.RECEIEVED_GAME,
      game: game
    });
  },

  removeGame: function(game) {
    AppDispatcher.dispatch({
      actionType: GameConstants.REMOVED_GAME,
      game: game
    });
  }
};

module.exports = GameActions;
