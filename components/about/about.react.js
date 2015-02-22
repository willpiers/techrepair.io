var React = require('react');
var Link = require('react-router').Link;

var About = React.createClass({
  render: function() {
    return (
      <div className="about row">
        <img className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0" src="images/john.jpg"/>
        
        <div className="col-xs-12 col-sm-8">
          <p>Hello! My name is John - I’m a self-taught, tech repair specialist currently living in downtown Fort Collins. <Link to='home'>CellTech Repairs</Link> is a business I started during my final semester of college and because its independently run, I guarantee that I can beat any competitor’s price!</p>
          <p>I also guarantee my work and will reimburse the cost of both my time and new parts for any unsuccessful repair. I pride myself on meticulous attention to detail and quality in every repair that I do.</p>
          <div>
            <p>Please feel free to browse the website for common repair prices, or reach out to me directly for a more precise quote. Thank you for your business!</p>
            <dl>
              <div>
                <strong>Phone:</strong>(970) 237-3561
              </div>
              <div>
                <strong>Email Address:</strong>john.morehead@techrepair.io
              </div>
              <div>
                <strong>Address:</strong>
                <span>643 Remington St, Fort Collins, CO 80524</span>
              </div>
            </dl>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = About;