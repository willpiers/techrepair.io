var React = require('react');
var Link = require('react-router').Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className="home">
        <p>Welcome to CellTech Repairs - an independently managed tech-repair business!</p>
        <p>Feel free to check out common repair types/prices, or <Link to='about'>contact me</Link> directly for a more personalized quote.</p>
        <p>Thanks for stopping by!</p>
      </div>
    );
  }
});

module.exports = Home;