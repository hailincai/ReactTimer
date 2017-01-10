import React from "react";

var Clock = React.createClass({
  formatSecs: function(totalSecs){
    if (typeof totalSecs !== "number"){
      return "00:00";
    }

    let secs = totalSecs % 60;
    let mins = Math.floor(totalSecs / 60);

    if (secs < 10){
      secs = "0" + secs;
    }
    if (mins < 10){
      mins = "0" + mins;
    }

    return mins + ":" + secs;
  },

  getDefaultProps: function() {
    return {
      totalSecs: 0
    };
  },

  propTypes: {
    totalSecs: React.PropTypes.number
  },

  render: function(){
    let {totalSecs} = this.props;

    return (
      <div className="clock">
        <span className="clock-text">{this.formatSecs(totalSecs)}</span>
      </div>
    );
  }
});

export default Clock;
