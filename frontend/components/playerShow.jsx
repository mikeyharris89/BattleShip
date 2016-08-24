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
    var player = PlayerStore.currentPlayer().name
    return (
      <div>
        <p>Hi {player}</p>
        <button onClick={this.createGame}>Play Game!</button>
        <button onClick={this.logOut}> Log Out</button>
      </div>

    );
  }

});

module.exports = PlayerShow;
