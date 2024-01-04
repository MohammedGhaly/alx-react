import React from "react";
import Notification from "./Notifications";
import { shallow } from "enzyme";

describe("testing notifications", () => {
  it("the notification renders without crashing", () => {
    const notification = shallow(<Notification />);
    expect(notification).toBeDefined();
  });
  it("renders header item", () => {
    const notification = shallow(<Notification />);
    expect(notification.find(".App-header")).toBeDefined();
  });
  it("renders body item", () => {
    const notification = shallow(<Notification />);
    expect(notification.find(".App-body")).toBeDefined();
  });
  it("renders footer item", () => {
    const notification = shallow(<Notification />);
    expect(notification.find(".App-footer")).toBeDefined();
  });
});
