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
        <ul className="brands">
          <Link to="apple"><li><img src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/200px-Apple_logo_black.svg.png"/></li></Link>
          <Link to="samsung"><li><img src="http://upload.wikimedia.org/wikipedia/fa/9/9b/Samsung_Logo.svg.png"/></li></Link>
          <Link to="lg"><li><img src="http://upload.wikimedia.org/wikipedia/it/0/0e/LGlogo.png"/></li></Link>
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
        <p>My name is John; I&#39;m a self-taught tech repair specialist currently living in downtown Fort Collins.</p>
        <p>CellTech Repairs is a business I started in my final semester of college. I pride myself on meticulous quality in every repair I do, and as I&#39;m the sole proprieter of this business, I guarantee I can beat any competitor&#39;s price!</p>
        <img src="images/john.jpg"/>
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