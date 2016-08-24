var AppDispatcher = require('../dispatcher/dispatcher'),
    TileConstants = require('../constants/tile_constants'),
    Store = require('flux/utils').Store;

var TileStore = new Store(AppDispatcher);

var _tiles = {};

var resetTiles = function(tiles){
  debugger
  _tiles = {};
  tiles.forEach(function(tile){
    _tiles[tile.id] = tile;
  });
};

var setTile = function(tile){
  _tiles[tile.id] = tile;
};

TileStore.playerTiles = function(){
  var tiles = [];

  Object.keys(_tiles).forEach(function(key){
    tiles.push(_tiles[key]);
  });
  return tiles;
};

TileStore.__onDispatch = function (payload){
    switch(payload.actionType){
      case(TileConstants.RECEIVED_TILES):
        resetTiles(payload.tiles);
        break;
      case(TileConstants.REMOVED_GAME):
        removeGame(payload.game);
        break;
    }
    this.__emitChange();
};

module.exports = TileStore;
