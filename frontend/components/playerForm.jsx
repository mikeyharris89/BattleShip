var React = require('react'),
    Link = require('react-router').Link,
    GameStore = require('../stores/game_store'),
    ClientActions = require('../actions/client_actions'),
    PlayerStore = require('../stores/player_store');

var PlayerForm = React.createClass({

getInitialState: function(){
  return ({name: ""});
},

contextTypes: {
  router: React.PropTypes.object.isRequired
},

componentDidMount: function () {
   this.playerListener = PlayerStore.addListener(this.redirectIfLoggedIn);
 },

 componentWillUnmount: function() {
   this.playerListener.remove();
 },

redirectIfLoggedIn: function() {
  if (PlayerStore.currentPlayer()){
    this.context.router.push("players/" + PlayerStore.currentPlayer().id)
  }
},

nameChange: function(e) {
  this.setState({ name: e.target.value })
},

handleSubmit: function(e){
    e.preventDefault();
    var formData = {name: this.state.name}
    ClientActions.createPlayer(formData);
},

render: function() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <p>To Get Started Enter Your Name Below</p>
        <input value={this.state.name} onChange={this.nameChange}/>
        <button type="submit">Submit!</button>
      </form>
    </div>
  )
}
});

module.exports = PlayerForm;
