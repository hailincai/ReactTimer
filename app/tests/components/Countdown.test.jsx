import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jQuery";
import TestUtils from "react-addons-test-utils";

import Countdown from "CountDown";

describe("Countdown", () => {
  it("should exist", () => {
    expect(Countdown).toExist();
  });

  describe("handleSetCountdown", () => {
    //when you pass done parameter, it means test will have async call
    //then mocha will wait for done function be called before it think the testing finish
    it("should set state to started and count down", (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.totalSecs).toBe(10);
      expect(countdown.state.countdownStatus).toBe("started");

      setTimeout(() => {
        expect(countdown.state.totalSecs).toBe(9);
        done();
      }, 1001);
    });

    it("should never countdown to negative number", (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      setTimeout(() => {
        expect(countdown.state.totalSecs).toBe(0);
        done();
      }, 3000);
    });

    it("should pause countdown on paused status", (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange("paused");

      setTimeout(() => {
        expect(countdown.state.totalSecs).toBe(3);
        expect(countdown.state.countdownStatus).toBe("paused");
        done();
      }, 1001);
    });

    it("should reset totalSecs after stopped", (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange("stopped");

      setTimeout(() => {
        expect(countdown.state.totalSecs).toBe(0);
        expect(countdown.state.countdownStatus).toBe("stopped");
        done();
      }, 1001);
    })
  });
});
