import React from "react";
import Clock from "Clock";
import Controls from "Controls";

var Timer = React.createClass({
  getInitialState: function() {
    return ({
      secs: 0,
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
        case "stopped": {
          this.setState({secs: 0});
        }
        case "paused": {
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        }
      }
    }
  },

  componentWillUnmount: function() {
    console.log("Compoenent will unmount");
    clearInterval(this.timer);
    this.timer = undefined;
  },

  render: function(){
    let {secs, countdownStatus} = this.state;

    return(
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSecs={secs}/>
        <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  },

  handleStatusChange: function(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },

  startTimer: function() {
    this.timer = setInterval(() => {
      let newSecs = this.state.secs + 1;
      this.setState({secs: newSecs});
    }, 1000);
  },
});

export default Timer;
