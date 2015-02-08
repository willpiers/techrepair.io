var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li className="model col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div className='well'>
          <p>{this.props.name}</p>
          <img src={this.props.img} style={{'margin': 'auto', 'marginBottom': '15px'}} className='img-responsive'/>
          {this.props.services.map(function(service) {
            return (
              <p style={{'textAlign': 'left', 'margin': '0'}}>
                {service.name} - <strong>${service.price}</strong>
              </p>
            );
          })}
        </div>
      </li>
    );
  }
});