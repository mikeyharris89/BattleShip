var GameApiUtil = require("../util/game_api_util");
var PlayerApiUtil = require("../util/player_api_util");

var ClientActions = {

  createPlayer: function(data){
    PlayerApiUtil.createPlayer(data);
  },

  deletePlayer: function(id){
    PlayerApiUtil.deletePlayer(id);
  },

  createGame: function(data){
    GameApiUtil.createGame(data);
  },

  getGame: function(id) {
    GameApiUtil.getGame(id);
  },

  deleteGame: function(id) {
    GameApiUtil.deleteGame(id);
  }
};

module.exports = ClientActions;
