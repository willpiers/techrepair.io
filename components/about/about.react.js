var React = require('react');

var About = React.createClass({
  render: function() {
    return (
      <div className="about row">
        <img className="col-xs-3 col-xs-offset-1" src="images/john.jpg"/>
        
        <div className="col-xs-7">
          <p>My name is John; I&#39;m a self-taught tech repair specialist currently living in downtown Fort Collins.</p>
          <p>CellTech Repairs is a business I started in my final semester of college. I pride myself on meticulous quality in every repair I do, and as I&#39;m the sole proprieter of this business, I guarantee I can beat any competitor&#39;s price!</p>
          <div>
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

module.exports = About;