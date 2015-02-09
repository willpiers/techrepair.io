var React = require('react');

var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="pricing row">
        <p className="col-xs-10 col-xs-offset-1">*Please note that blah blah blah.</p>
        <ul className="brands col-xs-12 col-sm-10 col-sm-offset-1">
          <div className='col-xs-12'>
            <Link className='col-xs-4' to="samsung"><li><img className='img-responsive' src="http://upload.wikimedia.org/wikipedia/fa/9/9b/Samsung_Logo.svg.png"/></li></Link>
            <Link className='col-xs-4' to="apple"><li><img className='img-responsive' src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/200px-Apple_logo_black.svg.png"/></li></Link>
            <Link className='col-xs-4' to="lg"><li><img className='img-responsive' src="http://upload.wikimedia.org/wikipedia/it/0/0e/LGlogo.png"/></li></Link>
          </div>
        </ul>

        <RouteHandler/>
      </div>
    );
  }
});