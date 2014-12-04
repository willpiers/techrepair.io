var React = require('react');
require('./base.less');

var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Pricing = React.createClass({
  render: function() {
    return (
      <div className="pricing">
        <h2>Pricing</h2>
        <p className="disclaimer">*Please note that blah blah blah.</p>
        <ul>
          <Link to="apple"><li>Apple</li></Link>
          <Link to="samsung"><li>Samsung</li></Link>
          <Link to="lg"><li>LG</li></Link>
        </ul>

        <RouteHandler/>
      </div>
    );
  }
});

var About = React.createClass({
  render: function() {
    return (
      <div>
        <h2>About</h2>
        <p>My name is John; I&#39;m a self-taught tech repair specialist currently living in downtown Fort Collins, Colorado.</p>
        <img src="images/john.jpg"/>
      </div>
    );
  }
});

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
});

var Index = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Index</h2>
      </div>
    );
  }
});

var ApplePricing = React.createClass({
  render: function() {
    return (
      <dl>
        <dt>iPhone</dt>
        <dd>
          <dl>
            <dt>3g/s</dt>
            <dd>
              <dl>
                <dt>Digitizer Replacement</dt>
                <dd>50 dollars you stupid idiot</dd>

                <dt>LCD Replacement</dt>
                <dd>50 dollars you stupid idiot</dd>

                <dt>Water Damage</dt>
                <dd>50 dollars you stupid idiot</dd>

                <dt>Battery Replacement</dt>
                <dd>50 dollars you stupid idiot</dd>
              </dl>
            </dd>

            <dt>4/s</dt>
            <dd></dd>

            <dt>5/s</dt>
            <dd></dd>

            <dt>6/+</dt>
            <dd></dd>
          </dl>
        </dd>
      </dl>
    );
  }
});

var SamsungPricing = React.createClass({
  render: function() {
    return (
      <span>30 bucks idiot</span>
    );
  }
});

var LGPricing = React.createClass({
  render: function() {
    return (
      <span>10 bucks idiot</span>
    );
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div style={{'height': '100%'}}>
        <nav>
          <Link to="/"><img src="images/celltech_logo.png" className="logo"/></Link>
          <ul>
            <Link to="home"><li>Home</li></Link>
            <Link to="pricing"><li>Pricing</li></Link>
            <Link to="about"><li>About</li></Link>
          </ul>
        </nav>
        <div className="content">
        <div id="banner">
          <img src="images/celltech_banner.png"/>
        </div>
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="pricing" handler={Pricing}>
      <Route name="apple" handler={ApplePricing}/>
      <Route name="samsung" handler={SamsungPricing}/>
      <Route name="lg" handler={LGPricing}/>
      <DefaultRoute handler={ApplePricing}/>
    </Route>
    <Route name="about" handler={About}/>
    <Route name="home" handler={Home}/>
    <DefaultRoute handler={Index}/>
  </Route>
);


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});