var React = require('react');
var Model = require('./model.react');

module.exports = React.createClass({
  render: function() {
    return (
      <div style={{'clear': 'both'}}>
        <h2>LG Models</h2>
        <ul className="models col-xs-12" style={{'listStyle': 'none', 'paddingLeft': '0', 'paddingRight': '0'}}>
          <Model img='http://i.walmartimages.com/i/p/00/61/69/60/03/0061696003880_500X500.jpg' services={this.services} name='Optimus' />
          <Model img='http://i.walmartimages.com/i/p/00/61/69/60/03/0061696003880_500X500.jpg' services={this.services} name='Optimus' />
          <Model img='http://i.walmartimages.com/i/p/00/61/69/60/03/0061696003880_500X500.jpg' services={this.services} name='Optimus' />
          <Model img='http://i.walmartimages.com/i/p/00/61/69/60/03/0061696003880_500X500.jpg' services={this.services} name='Optimus' />
          <Model img='http://i.walmartimages.com/i/p/00/61/69/60/03/0061696003880_500X500.jpg' services={this.services} name='Optimus' />
          <Model img='http://i.walmartimages.com/i/p/00/61/69/60/03/0061696003880_500X500.jpg' services={this.services} name='Optimus' />
          <Model img='http://i.walmartimages.com/i/p/00/61/69/60/03/0061696003880_500X500.jpg' services={this.services} name='Optimus' />
        </ul>
      </div>
    );
  },

  services: [
    {
      name: 'water damage',
      price: '50'
    },
    {
      name: 'digitizer replacement',
      price: '75'
    }
  ]
});