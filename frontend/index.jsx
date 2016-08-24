var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;
var GameShow = require('./components/gameShow');
var ClientActions = require('./actions/client_actions');
var PlayerStore = require('./stores/player_store');
var App = React.createClass({
  getInitialState: function(){
    return ({name: ""});
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
        <h1>Battleship</h1>
          {this.props.children}
        <form onSubmit={this.handleSubmit}>
          <p>To Get Started Enter Your Name Below</p>
          <input value={this.state.name} onChange={this.nameChange}/>
          <button type="submit">Submit!</button>
        </form>
      </div>
    )
  }
});

var router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="games/:id" component={ GameShow } />
    </Route>
  </Router>
);


document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('root');
  ReactDOM.render(router, root);
});

var startGame = function(e) {

}
