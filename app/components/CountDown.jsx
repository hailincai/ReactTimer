import React from "react";
import Clock from "Clock";
import CountdownForm from "CountdownForm";
import Controls from "Controls";

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

      if (newSecs == 0) {
        this.setState({countdownStatus: "stopped"});
      }
    }, 1000);
  },

  getInitialState: function(){
    return (
      {
        totalSecs: 0,
        countdownStatus: "stopped"
      });
  },

  //is invoked immediately before rendering when new props or state are being received.
  //componentWillUpdate: function(nextProps, nextState) {
  //},

  //is invoked immediately after updating occurs.
  //componentWillUpdate happen before componentDidUpdate
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case "started": {
          this.startTimer();
          break;
        }
        case "stopped": {
          this.setState({totalSecs: 0});
        }
        case "paused": {
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        }
      }
    }
  },

  //componentWillMount: function(){
  //  console.log("componentWillMount");
  //},

  //componentDidMount: function() {
  //  console.log("componentDidMount");
  //},

  componentWillUnmount: function() {
    console.log("Compoenent will unmount");
    clearInterval(this.timer);
    this.timer = undefined;
  },

  render: function () {
    let {totalSecs, countdownStatus} = this.state;

    let renderControlArea = () => {
      if (countdownStatus === "stopped"){
        return (<CountdownForm onSetCountdown={this.handleSetCountdown}/>);
      }else {
        return (<Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>);
      }
    };

    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSecs={totalSecs}/>
        {renderControlArea()}
      </div>
    )
  },

  handleStatusChange: function(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  }
});

export default CountDown;
