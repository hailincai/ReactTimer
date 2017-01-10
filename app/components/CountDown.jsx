import React from "react";
import Clock from "Clock";
import CountdownForm from "CountdownForm";

var CountDown = React.createClass({
  handleSetCountdown: function(newCountdown){
    this.setState({totalSecs: newCountdown});
  },

  getInitialState: function(){
    return ({totalSecs: 0});
  },

  render: function () {
    let {totalSecs} = this.state;

    return (
      <div>
        <Clock totalSecs={totalSecs}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )
  }
});

export default CountDown;
