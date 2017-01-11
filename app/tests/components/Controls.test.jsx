import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jQuery";
import TestUtils from "react-addons-test-utils";

import Controls from "Controls";

describe("Controls", () => {
  it("should exist", () => {
    expect(Controls).toExist();
  });

  describe("render", () => {
    it("should show start button if counddownStatus is paused", () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      var $el = $(ReactDOM.findDOMNode(controls));

      var startButton = $el.find("button:contains(Start)");
      expect(startButton.length).toBe(1);
    });

    it("should show pause button if countdownStatus is started", () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      var $el = $(ReactDOM.findDOMNode(controls));

      var startButton = $el.find("button:contains(Pause)");
      expect(startButton.length).toBe(1);
    })
  });
});
