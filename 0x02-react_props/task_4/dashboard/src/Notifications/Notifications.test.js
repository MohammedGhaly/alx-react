import React from "react";
import Notification from "./Notifications";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

describe("testing notification component with false 'displayDrawer'", () => {
  const notification = shallow(<Notification />);
  it("renders without crashing", () => {
    expect(notification).toBeDefined();
  });

  it("renders the first NotificationItem with the correct html", () => {
    expect(notification.find("ul").children()).toHaveLength(0);
  });

  it("renders menuItem and not Notifications.div", () => {
    expect(notification.find(".Notifications").exists()).toEqual(false);
    expect(notification.find(".menuItem").exists()).toEqual(true);
  });
});

describe("testing notification component with true 'displayDrawer'", () => {
  const notification = shallow(<Notification displayDrawer={true} />);
  it("renders without crashing", () => {
    expect(notification).toBeDefined();
  });

  it("renders the first NotificationItem with the correct html", () => {
    expect(notification.find("ul").children()).toHaveLength(3);
    expect(notification.find("ul").childAt(0).html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it("renders menuItem and not Notifications.div", () => {
    expect(notification.find(".Notifications").exists()).toEqual(true);
    expect(notification.find(".menuItem").exists()).toEqual(true);
  });
});
