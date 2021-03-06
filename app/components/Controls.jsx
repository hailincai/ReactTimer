import React from "react";

var Controls = React.createClass({
  onStatusChange: function(newStatus){
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },

  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  render: function() {
    let {countdownStatus} = this.props;

    let renderStartStopButton = () => {
      if (countdownStatus === "started"){
        return (<button className="button secondary" onClick={this.onStatusChange("paused")}>Pause</button>);
      }else if (countdownStatus === "paused" || countdownStatus === "stopped"){
        return (<button className="button primary" onClick={this.onStatusChange("started")}>Start</button>);
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange("stopped")}>Clear</button>
      </div>
    );
  }
});

export default Controls;
