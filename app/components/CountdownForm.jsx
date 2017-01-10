import React from "react";

var CountdownForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    let inputSeconds = this.refs.seconds.value;
    if (typeof inputSeconds === "string" && inputSeconds.length > 0 &&
          inputSeconds.match(/^[0-9]+$/)){
      this.refs.seconds.value = "";
      //post back to container
      this.props.onSetCountdown(parseInt(inputSeconds));
    }
  },

  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input ref="seconds" type="text" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>

    );
  }
});

export default CountdownForm;
