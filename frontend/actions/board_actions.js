var AppDispatcher = require('../dispatcher/dispatcher'),
    TileConstants = require('../constants/tile_constants');

var BoardActions = {

  setTiles: function(tiles) {
    AppDispatcher.dispatch({
      actionType: TileConstants.RECEIVED_TILES,
      tiles: tiles,
    });
  }
};

module.exports = BoardActions;
