var React = require('react'),
    Link = require('react-router').Link,
    GameStore = require('../stores/game_store'),
    ClientActions = require('../actions/client_actions');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Battleship</h1>

        <p>To Get Started Enter Your Name Below</p>
        <input>

        </input>
        <Link to="/games/1">start game </Link>
      </div>
    )
  }
});

module.exports = App;
