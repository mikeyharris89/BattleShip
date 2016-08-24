var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;
var PlayerShow = require('./components/playerShow');
var GameShow = require('./components/gameShow');
var ClientActions = require('./actions/client_actions');
var PlayerStore = require('./stores/player_store');
var PlayerForm = require('./components/playerForm');
var App = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Battleship</h1>
          {this.props.children}
      </div>
    )
  }
});

var router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PlayerForm}/>
      <Route path="players/:id" component={ PlayerShow } />
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
