var React = require('react'),
    TileStore = require('../stores/tile_store'),
    BoardActions = require('../actions/board_actions'),
    GameStore = require('../stores/game_store'),
    BoardTile = require('./boardTile');


var PlayerBoard = React.createClass({

  getInitialState: function () {
    return ({ tiles: this.createTiles(), attacked: false, shipsToPlace: 10, shipsLeft: 10, shipSpots: []});
  },

  createTiles: function(){
    tiles = {};
    for (var i = 0; i < 25; i++) {
      tiles[i] = ({id: i, val: "0"});
    }
    return tiles
  },

  componentWillReceiveProps: function(){
    if (this.props.cpuTurn){
      this.makeAttack();
    }

  },
  // shouldComponentUpdate: function(){
  //   debugger
  //   if (this.props.cpuTurn){
  //     this.makeAttack()
  //   }
  //   return true
  // },

  handlePlayerBoardClick: function(e){
    var tile = this.state.tiles[parseInt(e.target.id)];
    if (this.state.shipsToPlace > 0 && tile.val === "0"){
      this.setShip(tile)
    } else{
      this.setState({});
    }
  },

  setShip: function(tile) {
    tile.val = "S";
    var tiles = this.state.tiles;
    var spots = this.state.shipSpots.concat(tile.id);
    tiles[tile.id] = tile;
    this.setState({tiles: tiles, shipsToPlace: this.state.shipsToPlace -= 1, shipSpots: spots});
    if (this.state.shipsToPlace === 0){
      this.props.doneShips();
    }
  },

  makeAttack: function() {
    var attackPos = Math.floor(Math.random() * 25);
    while (this.state.tiles[attackPos].val === "M" || this.state.tiles[attackPos].val === "X"){
      attackPos = Math.floor(Math.random() * 25);
    }
    this.receiveAttack(attackPos)
  },

  receiveAttack: function(pos) {
    var tile = this.state.tiles[pos];
    if (tile.val === "S"){
      this.setMark(tile, "X", this.state.shipsLeft - 1);
    } else {
      this.setMark(tile, "M", this.state.shipsLeft);
    }
  },

  setMark: function(tile, mark, shipsLeft){
    tile.val = mark;
    tiles = this.state.tiles;
    tiles[tile.id] = tile;
    this.setState({tiles: tiles, shipsLeft: shipsLeft, attacked: false})
    this.props.attacked();
    if (shipsLeft ===0){
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
