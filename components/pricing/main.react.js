var React = require('react');

var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="pricing subsection">
        <h2>Pricing</h2>
        <p className="disclaimer">*Please note that blah blah blah.</p>
        <ul className="brands">
          <Link to="samsung"><li><img src="http://upload.wikimedia.org/wikipedia/fa/9/9b/Samsung_Logo.svg.png"/></li></Link>
          <Link to="apple"><li><img src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/200px-Apple_logo_black.svg.png"/></li></Link>
          <Link to="lg"><li><img src="http://upload.wikimedia.org/wikipedia/it/0/0e/LGlogo.png"/></li></Link>
        </ul>

        <RouteHandler/>
      </div>
    );
  }
});