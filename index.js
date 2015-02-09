var React = require('react');

require('./styles/bootstrap.min.css')
require('./styles/base.less');

var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var About = require('./components/about/about.react');
var Home = require('./components/home/home.react');
var Pricing = require('./components/pricing/index.react');
var Apple = require('./components/pricing/screens/apple.react');
var Samsung = require('./components/pricing/screens/samsung.react');
var LG = require('./components/pricing/screens/lg.react');

var App = React.createClass({
  render: function () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 col-md-2'>
            <div className='nav well'>
              <Link to="home" className='logo'>
                <img src="images/celltech_logo.png" className="img-responsive hidden-xs hidden-sm"/>
                <img src="images/celltech_banner.png" className="img-responsive visible-xs-block visible-sm-block"/>
              </Link>
              <ul className='row'>
                <Link className='col-xs-6 col-sm-12' to="about"><li>About</li></Link>
                <Link className='col-xs-6 col-sm-12' to="pricing"><li>Pricing</li></Link>
              </ul>
            </div>
          </div>
          <div className="content col-xs-12 col-md-10">
            <div className='well hidden-sm hidden-xs' id="banner">
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
    <Route name="pricing" handler={Pricing}>
      <Route name="apple" handler={Apple}/>
      <Route name="samsung" handler={Samsung}/>
      <Route name="lg" handler={LG}/>
      <DefaultRoute handler={Apple}/>
    </Route>
    <Route name="about" handler={About}/>

    <DefaultRoute handler={Home}/>
  </Route>
);


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});