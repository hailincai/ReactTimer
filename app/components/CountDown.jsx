import React from "react";
import Clock from "Clock";

var CountDown = React.createClass({
  render: function () {
    return (
      <div>
        <Clock totalSecs={129}/>
      </div>
    )
  }
});

export default CountDown;
