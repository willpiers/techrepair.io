var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <table className="table table-hover table-striped table-condensed">
        <thead>
          <th>
            {String.fromCharCode(8595) + ' Service'}
            <span className="divider">|</span>
            {'Model ' + String.fromCharCode(8594)}
          </th>
          <th>3g/s</th>
          <th>4/s</th>
          <th>5/s</th>
          <th>6/+</th>
        </thead>

        <tbody>
          <tr>
            <td>Digitizer Replacement</td>
            <td>100</td>
            <td>40</td>
            <td>45</td>
            <td>75</td>
          </tr>

          <tr>
            <td>LCD Replacement</td>
            <td>50</td>
            <td>40</td>
            <td>45</td>
            <td>75</td>
          </tr>

          <tr>
            <td>Water Damage</td>
            <td>50</td>
            <td>40</td>
            <td>45</td>
            <td>75</td>
          </tr>

          <tr>
            <td>Battery Replacement</td>
            <td>50</td>
            <td>40</td>
            <td>45</td>
            <td>75</td>
          </tr>
        </tbody>
      </table>
    );
  }
});