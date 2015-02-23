var React = require('react');

require('./styles/bootstrap.min.css')
require('./styles/base.less');

var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var Redirect = Router.Redirect;

var About = require('./components/about/about.react');
var Home = require('./components/home/home.react');
var Pricing = require('./components/pricing/index.react');
var Apple = require('./components/pricing/screens/apple.react');
var Samsung = require('./components/pricing/screens/samsung.react');
var LG = require('./components/pricing/screens/lg.react');
var HTC = require('./components/pricing/screens/htc.react');

var App = React.createClass({
  render: function () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 col-md-2' id='sidebar'>
            <div className='nav well'>
              <Link to='home' className='logo'>
                <img src='images/celltech_logo.png' className='img-responsive hidden-xs hidden-sm'/>
                <img src='images/celltech_banner.png' className='img-responsive visible-xs-block visible-sm-block'/>
              </Link>
              <ul className='row'>
                <Link className='col-md-12 hidden-xs hidden-sm' to='home'><li>Home</li></Link>
                <Link className='col-xs-6 col-sm-12' to='pricing'><li>Pricing</li></Link>
                <Link className='col-xs-6 col-sm-12' to='about'><li>About</li></Link>
              </ul>
            </div>
          </div>
          <div className='content col-xs-12 col-md-10 col-md-offset-2'>
            <RouteHandler/>
          </div>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route name='app' path='/' handler={App}>
    <Route name='pricing' ignoreScrollBehavior={true} handler={Pricing}>
      <Route name='apple' handler={Apple}/>
      <Route name='samsung' handler={Samsung}/>
      <Route name='lg' handler={LG}/>
      <Route name='htc' handler={HTC}/>

      <DefaultRoute handler={Samsung}/>
      <Redirect from='/pricing' to='/pricing/samsung'/>
    </Route>
    <Route name='about' handler={About}/>
    <Route name='home' handler={Home}/>

    <DefaultRoute handler={Home}/>
  </Route>
);


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});