import React from "react";
import Notification from "./Notifications";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

describe("testing notifications", () => {
  const notification = shallow(<Notification />);
  it("renders without crashing", () => {
    expect(notification).toBeDefined();
  });
  it("renders the first NotificationItem with the correct html", () => {
    expect(notification.find("ul").children()).toHaveLength(3);
    expect(notification.find("ul").childAt(0).html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });
});
