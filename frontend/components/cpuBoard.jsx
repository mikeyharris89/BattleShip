var React = require('react'),
    TileStore = require('../stores/tile_store'),
    BoardActions = require('../actions/board_actions'),
    GameStore = require('../stores/game_store');

var CpuBoard = React.createClass({

  getInitialState: function () {
    return ({ tiles: this.createTiles(), shipsHit: 0, shipsLeft: 10});
  },

  createTiles: function(){
    tiles = {};
    for (var i = 0; i < 25; i++) {
      tiles[i] = ({id: i, val: "0"});
    }
    return this.setShips(tiles)
  },

  setShips: function(tiles) {
    for (var i = 0; i < 10; i++) {
      var tempNum = Math.floor(Math.random() * 25);
      while (tiles[tempNum].val === "S"){
        tempNum = Math.floor(Math.random() * 25);
      }
      tile = tiles[tempNum];
      tile.val = "S";
      tiles[tempNum] = tile;
    }
    return tiles
  },


  handleClick: function(e){
    var tile = this.state.tiles[parseInt(e.target.id)];
    var shipsLeft = this.state.shipsLeft;
    if (tile.val === "S"){
      this.setMark(tile, "X", (shipsLeft - 1))
    } else if (tile.val === "0"){
      this.setMark(tile, "M", shipsLeft)
    }

  },

  setMark: function(tile, mark, shipsLeft){
    tile.val = mark;
    tiles = this.state.tiles;
    tiles[tile.id] = tile;
    this.setState({tiles: tiles, shipsLeft: shipsLeft})
    if (shipsLeft === 0){
      this.props.gameOver()
    }
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
        <ul className="board" id="computer-board" onClick={this.handleClick}>
          { board.map(function(tile){
            return tile;
          }) }
        </ul>
      </div>
    );
  }
})

module.exports = CpuBoard;
