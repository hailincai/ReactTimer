import React from "react";
import Clock from "Clock";
import CountdownForm from "CountdownForm";

var CountDown = React.createClass({
  handleSetCountdown: function(newCountdown){
    this.setState({
      totalSecs: newCountdown,
      countdownStatus: "started"
    });
  },

  startTimer: function() {
    this.timer = setInterval(() => {
      let newSecs = this.state.totalSecs - 1;
      this.setState({totalSecs: (newSecs >= 0) ? newSecs : 0});
    }, 1000);
  },

  getInitialState: function(){
    return (
      {
        totalSecs: 0,
        countdownStatus: "stopped"
      });
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case "started": {
          this.startTimer();
          break;
        }
      }
    }
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
