var React = require('react');
var Link = require('react-router').Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className="home row">
        <p className='col-xs-10 col-xs-offset-1'>Welcome to CellTech Repairs - an independently managed tech-repair business!</p>
        <p className='col-xs-10 col-xs-offset-1'>Feel free to check out common <Link to='pricing'>repair types/prices</Link>, or <Link to='about'>contact me</Link> directly for a more personalized quote.</p>
        <p className='col-xs-10 col-xs-offset-1'>Thanks for stopping by!</p>
      </div>
    );
  }
});

module.exports = Home;