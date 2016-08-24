var React = require('react'),
    TileStore = require('../stores/tile_store'),
    BoardActions = require('../actions/board_actions'),
    GameStore = require('../stores/game_store'),
    BoardTile = require('./boardTile');


var PlayerBoard = React.createClass({

  getInitialState: function () {
    return ({ tiles: this.createTiles(), shipsToPlace: 10, shipsLeft: 10, shipSpots: []});
  },

  createTiles: function(){
    tiles = {};
    for (var i = 0; i < 25; i++) {
      tiles[i] = ({id: i, val: "0"});
    }
    return tiles
  },

  getTerms: function() {
    this.setState({ tiles: TileStore.playerTiles});
  },

  handlePlayerBoardClick: function(e){
    var tile = this.state.tiles[parseInt(e.target.id)];
    if (this.state.shipsToPlace > 0 && tile.val === "0"){
      this.setShip(tile)
    }
  },

  setShip: function(tile) {
    tile.val = "S";
    var tiles = this.state.tiles;
    var spots = this.state.shipSpots.concat(tile.id);
    tiles[tile.id] = tile;
    this.setState({tiles: tiles, shipsToPlace: this.state.shipsToPlace -= 1, shipSpots: spots});
    if (this.state.shipsToPlace === 0){
      debugger
      this.props.doneShips();
    }
  },

  finished: function(){
    debugger
    return this.state.shipsLeft === 0
  },

  render: function() {
    var tiles = this.state.tiles;
    if (!tiles){
      var board = "";
    } else {
      var board = Object.keys(tiles).map(function(key){
        var tile = tiles[key]
        return (<li className="board-tile" key={tile.id} id={tile.id}>{tile.val}</li>);
      })
    }
    return(
      <div>
        <ul className="board" id="player-board" onClick={this.handlePlayerBoardClick}>
          { board.map(function(tile){
            return tile;
          }) }
        </ul>
      </div>
    );
  }
})

module.exports = PlayerBoard;
