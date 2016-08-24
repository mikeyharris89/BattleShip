var React = require('react'),
    Link = require('react-router').Link,
    GameStore = require('../stores/game_store'),
    ClientActions = require('../actions/client_actions');

var PlayerShow = React.createClass({
  componentDidMount: function(){
  },

  createGame: function(){
    ClientActions.createGame({player_id: parseInt(this.props.params.id)})
  },

  render: function() {
    return (
      <div>
        <p>Hi</p>
        <button onClick={this.createGame}>Play Game!</button>
      </div>

    );
  }

});

module.exports = PlayerShow;
