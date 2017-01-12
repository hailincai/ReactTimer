import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jQuery";
import TestUtils from "react-addons-test-utils";

import Timer from "Timer";

describe("Timer", () => {
  it("should exist", () => {
    expect(Timer).toExist();
  });

  it("should counting start from zero", () => {
    var timer = TestUtils.renderIntoDocument(<Timer />);

    expect(timer.state.secs === 0);
    expect(timer.state.countdownStatus === "stopped");
  });

  it("should count to 3 after starting timer 3 secs", (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleStatusChange("started");

    setTimeout(() => {
      expect(timer.state.secs === 3);
      done();
    }, 3001);
  });

  it("should keep same secs after paus the timer", (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleStatusChange("started");

    setTimeout(() => {
      timer.handleStatusChange("paused");
      setTimeout(() => {
        expect(timer.state.secs === 1);
        done();
      }, 1001);
    }, 1001);
  });

  it("should reset the secs after stop the timer", (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleStatusChange("started");

    setTimeout(() => {
      timer.handleStatusChange("stopped");
      setTimeout(() => {
        expect(timer.state.secs === 0);
        done();
      }, 1001);
    }, 1001);
  })
})
