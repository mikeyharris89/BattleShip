var GameApiUtil = require('../util/game_api_util'),
    AppDispatcher = require('../dispatcher/dispatcher'),
    GameConstants = require('../constants/game_constants');

var GameActions = {
  createGame: function() {
    AppDispatcher.dispatch({
      actionType: GameConstants.
    });
  },

  receiveSingleGame: function(game) {
    AppDispatcher.dispatch({
      actionType: GameConstants.RECEIEVED_GAME,
      game: game
    });
  },
};
