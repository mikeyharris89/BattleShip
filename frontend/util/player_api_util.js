var PlayerActions = require('../actions/player_actions');

var PlayerApiUtil = {
  createPlayer: function (data) {
    $.ajax({
      url: "api/players",
      type: "POST",
      contentType: false,
      processData: false,
      data: data,
      success: function(player){
        PlayerActions.receiveSinglePlayer(player);
      },
      error: function(xhr) {
        console.log(xhr.responseJSON);
      }
    });
  },

  getPlayer: function(id) {
    $.ajax({
      url: "api/players/" + id,
      success: function (player) {
        PlayerActions.receiveSinglePlayer(player);
      },
      error: function(xhr) {
        console.log(xhr.responseJSON);
      }
    });
  },

  deletePlayer: function(id) {
    $.ajax({
      url: "api/players/" + id,
      type: 'DELETE',
      success: function(player) {
        PlayerActions.removePlayer(player);
      },
      error: function(xhr) {
        console.log(xhr.responseJSON);
      }
    });
  }
};

module.exports = PlayerApiUtil;
