import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jQuery";
import TestUtils from "react-addons-test-utils";

import CountdownForm from "CountdownForm";

describe("CountdownForm", () => {
  it("should exist", () => {
    expect(CountdownForm).toExist();
  });

  it("should call onSetCountdown if valid seconds entered", () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = "61";
    TestUtils.Simulate.submit($el.find("form")[0]);
    expect(spy).toHaveBeenCalledWith(61);
  });

  it("should not call onSetCountdown if invalid seconds entered", () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds = "abc";
    TestUtils.Simulate.submit($el.find("form")[0]);
    expect(spy).toNotHaveBeenCalled();

    countdownForm.refs.seconds = "123ab";
    TestUtils.Simulate.submit($el.find("form")[0]);
    expect(spy).toNotHaveBeenCalled();
  })
});
