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
    return ( {game: potentialGame ? potentialGame : {}, gameOver: false, playerWins: true});
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  playerWins: function() {
    this.setState({gameOver: true});
  },

  cpuWins: function() {
    this.setState({gameOver: true, playerWins: false})
  },

  newGame: function() {
    ClientActions.deleteGame(parseInt(this.props.params.id));
    this.context.router.push("/")
  },

  shipsSet: function() {
    debugger
  },

  playGame: function() {

  },

  render: function() {
    var buttonText = "Quit Game"
    if (this.state.gameOver){
      buttonText = "Play Again!"
    }
    return (
      <div>
        <p>Heloooo</p>
        <button onClick={this.newGame}>{buttonText}</button>
        <PlayerBoard doneShips={this.shipsSet} gameOver={this.cpuWins}/>
        <CpuBoard gameOver={this.playerWins}/>
      </div>

    );
  }

});

module.exports = GameShow;
