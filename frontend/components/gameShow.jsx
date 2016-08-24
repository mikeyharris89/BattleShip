var React = require('react'),
    Link = require('react-router').Link,
    GameStore = require('../stores/game_store'),
    BoardActions = require('../actions/board_actions'),
    PlayerBoard = require('./playerBoard'),
    CpuBoard = require('./cpuBoard'),
    ClientActions = require('../actions/client_actions');

var GameShow = React.createClass({
  getInitialState: function() {
    var potentialGame = GameStore.currentGame();
    return ( {game: potentialGame ? potentialGame : {}});
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  gameOver: function() {
    // debugger
    // return PlayerBoard.finished() || CpuBoard.finished()
    return false
  },

  newGame: function() {
    ClientActions.deleteGame(parseInt(this.props.params.id));
    this.context.router.push("/")
  },

  render: function() {
    var buttonText = "Quit Game"
    if (this.gameOver()){
      buttonText = "Play Again!"
    }
    return (
      <div>
        <p>Heloooo</p>
        <button onClick={this.newGame}>{buttonText}</button>
        <PlayerBoard/>
        <CpuBoard/>
      </div>

    );
  }

});

module.exports = GameShow;
