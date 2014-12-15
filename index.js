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

var About = React.createClass({
  render: function() {
    return (
      <div>
        <h2>About</h2>
        <img className="split john-pic" src="images/john.jpg"/>
        
        <div className="split john-info">
          <p>My name is John; I&#39;m a self-taught tech repair specialist currently living in downtown Fort Collins.</p>
          <p>CellTech Repairs is a business I started in my final semester of college. I pride myself on meticulous quality in every repair I do, and as I&#39;m the sole proprieter of this business, I guarantee I can beat any competitor&#39;s price!</p>
          <div className="john-contact-info">
            <p>Please feel free to browse the website for common repair prices, or reach out to me directly for a more precise quote. Thank you for your business!</p>
            <dl>
              <dt>phone</dt>
              <dd>1234567890</dd>
              <dt>email address</dt>
              <dd>fuck@you.seriousl</dd>
              <dt>physical address</dt>
              <dd>643 Remington</dd>
            </dl>
          </div>
        </div>
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
        <p>Copy about how great John&#39;s business is an why you should choose it over any other repair service</p>
        <h3>Mission</h3>
        <p>yer mission and stuff</p>
      </div>
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
    <Route name="pricing" handler={Pricing.Main}>
      <Route name="apple" handler={Pricing.Apple}/>
      <Route name="samsung" handler={Pricing.Samsung}/>
      <Route name="lg" handler={Pricing.Lg}/>
      <DefaultRoute handler={Pricing.Apple}/>
    </Route>
    <Route name="about" handler={About}/>
    <Route name="home" handler={Home}/>
    <DefaultRoute handler={Index}/>
  </Route>
);


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});