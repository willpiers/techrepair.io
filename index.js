var React = require('react');

require('./styles/bootstrap.min.css')
require('./styles/base.less');

var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Pricing = require('./components/pricing/index');
var About = require('./components/about/about.react');
var Home = require('./components/home/home.react');

var App = React.createClass({
  render: function () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 col-sm-2'>
            <div className='nav'>
              <Link to="home" className='hidden-xs'>
                <img src="images/celltech_logo.png" className="img-responsive hidden-xs"/>
              </Link>
              <ul>
                <Link to="about"><li>About</li></Link>
                <Link to="pricing"><li>Pricing</li></Link>
              </ul>
            </div>
          </div>
          <div className="content col-xs-12 col-sm-10">
            <div className='hidden-xs' id="banner">
              <img src="images/celltech_banner.png"/>
            </div>
            <RouteHandler/>
          </div>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route name="home" path="/" handler={App}>
    <Route name="pricing" handler={Pricing.Main}>
      <Route name="apple" handler={Pricing.Apple}/>
      <Route name="samsung" handler={Pricing.Samsung}/>
      <Route name="lg" handler={Pricing.Lg}/>
      <DefaultRoute handler={Pricing.Apple}/>
    </Route>
    <Route name="about" handler={About}/>

    <DefaultRoute handler={Home}/>
  </Route>
);


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});