var React = require('react'),
    Link = require('react-router').Link,
    GameStore = require('../stores/game_store'),
    ClientActions = require('../actions/client_actions'),
    PlayerStore = require('../stores/player_store');

var PlayerShow = React.createClass({
  componentDidMount: function () {
    this.gameListener = GameStore.addListener(this.redirectIfGame);
  },

  componentWillUnmount: function() {
    this.gameListener.remove();
  },

  createGame: function(){
    ClientActions.createGame({player_id: parseInt(this.props.params.id)});
  },

  logOut: function(){
    ClientActions.deletePlayer(parseInt(this.props.params.id));
    this.context.router.push("/")
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  redirectIfGame: function(){
    if (GameStore.currentGame()){
      this.context.router.push("games/" + GameStore.currentGame().id)
    }
  },

  render: function() {
    var player = "";
    var directions = "This is Battleship! An interactive game where you must\
     destroy the super computer. First to sink their opponent's 10 ships\
     wins! Place your 10 ships (which become WHITE), and then click away\
     at your opponent's board. A hit turns the square RED, and a miss is GREEN";

    if (PlayerStore.currentPlayer()){
      player = PlayerStore.currentPlayer().name
    }
    return (
      <div>
        <p>Hi {player}</p>
        <div className="description group">
          <div className="directions">{directions}</div>
          <ul className="squares">
            <li style={{backgroundColor: "white"}}>Ship</li>
            <li style={{backgroundColor: "#006994"}}>Open</li>
            <li style={{backgroundColor: "red"}}>Hit</li>
            <li style={{backgroundColor: "green"}}>Miss</li>
          </ul>
        </div>
        <button onClick={this.createGame}>Play Game!</button>
        <button onClick={this.logOut}> Log Out</button>
      </div>

    );
  }

});

module.exports = PlayerShow;
