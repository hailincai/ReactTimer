import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jQuery";
import TestUtils from "react-addons-test-utils";
import Clock from "Clock";

describe("Clock", function() {
  it("should exists", () => {
    expect(Clock).toExist();
  });

  describe("render", () => {
    it("should render clock to output", () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSecs={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualClockText = $el.find(".clock-text").text();

      expect(actualClockText).toBe("01:02");
    });

    it("should render 00:00 if no sec pass in", () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualClockText = $el.find(".clock-text").text();
      
      expect(actualClockText).toBe("00:00");
    })
  });

  describe("formatSecs", () => {
    var clock;

    before(() => {
      clock = TestUtils.renderIntoDocument(<Clock/>);
    });

    it("should format seconds==615->10:15", () => {
      var seconds = 615;
      var expected = "10:15";
      expect(clock.formatSecs(seconds)).toBe(expected);
    });

    it("should format seconds when mins/secs are less than 10==61->01:01", () => {
      var seconds = 61;
      var expected = "01:01";
      expect(clock.formatSecs(seconds)).toBe(expected);
    });
  });
});
