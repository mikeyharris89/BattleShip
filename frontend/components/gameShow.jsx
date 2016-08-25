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
    return ( {game: potentialGame ? potentialGame : {},
              showCpu: false,
              cpuTurn: false,
              gameOver: false,
              playerWins: true,
            });
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
    this.setState({showCpu: true})
  },

  attackPlayer: function(){

    this.setState({cpuTurn: true})
  },

  playerAttacked: function() {

    this.setState({cpuTurn: false})
  },

  render: function() {
    var buttonText = "Quit Game",
        cpu = "";
        commandLine = "Place Ships"
    if (this.state.showCpu){
      cpu = <CpuBoard gameOver={this.playerWins} spaceChanged={this.attackPlayer}/>;
      commandLine = "Click Enemy Sqaure!"
    }
    if (this.state.gameOver){
      buttonText = "Play Again!"
      if (this.state.playerWins){
        commandLine = "You win!!!"
      } else{
        commandLine = "CPU wins, click button to play again!"
      }
    }
    return (
      <div className="game">
        <p className="command">{commandLine}</p>
        <div className="screen group">
          <div className="player">
            <PlayerBoard attacked={this.playerAttacked} cpuTurn={this.state.cpuTurn} doneShips={this.shipsSet} gameOver={this.cpuWins}/>
            </div>
          <div className="cpu">
            {cpu}
          </div>
        </div>
        <button onClick={this.newGame}>{buttonText}</button>
      </div>

    );
  }

});

module.exports = GameShow;
