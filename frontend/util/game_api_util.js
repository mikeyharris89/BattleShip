var GameActions = require('../actions/game_actions');

var GameApiUtil = {
  createGame: function (data) {
    $.ajax({
      url: "api/games",
      type: "POST",
      data: {game: data},
      success: function(game){
        GameActions.receiveSingleGame(game);
      },
      error: function(xhr) {
        console.log(xhr.responseJSON);
      }
    });
  },

  getGame: function(id) {
    $.ajax({
      url: "api/games/" + id,
      success: function (game) {
        GameActions.receiveSingleGame(game);
      },
      error: function(xhr) {
        console.log(xhr.responseJSON);
      }
    });
  },

  deleteGame: function(id) {
    $.ajax({
      url: "api/games/" + id,
      type: 'DELETE',
      success: function(game) {
        GameActions.removeGame(game);
      },
      error: function(xhr) {
        console.log(xhr.responseJSON);
      }
    });
  }
};

module.exports = GameApiUtil;
