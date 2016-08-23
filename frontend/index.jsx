var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;
var GameShow = require('./components/gameShow.jsx');
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
