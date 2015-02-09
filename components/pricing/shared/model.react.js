var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li className="model col-xs-6 col-sm-4 col-md-4 col-lg-3">
        <div className='well'>
          <h4>{this.props.name}</h4>
          <img src={this.props.img} style={{'margin': 'auto', 'marginBottom': '15px'}} className='img-responsive'/>
          <table className='table table-condensed'>
            <thead>
              <tr>
                <th>Service</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {this.props.services.map(function(service) {
                return (
                  <tr>
                    <td>{service.name}</td>
                    <td>{service.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </li>
    );
  }
});