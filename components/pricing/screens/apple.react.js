var React = require('react');
var Model = require('../shared/model.react');
var models = require('../shared/models.json').apple;
var _ = require('lodash');

module.exports = React.createClass({
  render: function() {
    return (
      <div style={{'clear': 'both'}}>
        <h2>Apple Models</h2>
        <ul className="models col-xs-12" style={{'listStyle': 'none', 'paddingLeft': '0', 'paddingRight': '0'}}>
          {this.addClearfixes(this.getModels())}
        </ul>
      </div>
    );
  },

  getModels: function() {
    return _.map(models, function(model, name) {
      return <Model img={model.image} services={model.services} name={name}/>
    });
  },

  addClearfixes: function(models) {
    return _.map(models, function(model, index) {
      index = index + 1;
      if (index % 6 === 0) {
        return [model, <div className='clearfix hidden-lg'></div>];
      } else if (index % 4 === 0) {
        return [model, <div className='clearfix visible-lg-block visible-xs-block'></div>];
      } else if (index % 3 === 0) {
        return [model, <div className='clearfix visible-sm-block visible-md-block'></div>];
      } else if (index % 2 === 0) {
        return [model, <div className='clearfix visible-xs-block'></div>];   
      } else {
        return model;
      }
    });
  }
});