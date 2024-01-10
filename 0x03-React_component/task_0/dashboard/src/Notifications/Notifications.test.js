import React from "react";
import Notification from "./Notifications";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";
import { getLatestNotification } from "../utils/utils";

import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

const listNotifications = [
  { id: 4, type: "default", value: "New course available" },
  { id: 5, type: "urgent", value: "New resume available" },
  { id: 6, type: "urgent", html: getLatestNotification() },
];

describe("testing notification component with false 'displayDrawer'", () => {
  const notification = shallow(
    <Notification listNotifications={listNotifications} />
  );
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
  const notification = shallow(
    <Notification displayDrawer={true} listNotifications={listNotifications} />
  );
  it("renders without crashing", () => {
    expect(notification).toBeDefined();
  });

  it("renders the first NotificationItem with the correct html", () => {
    expect(notification.find("ul").children()).toHaveLength(3);
    expect(notification.find("ul").childAt(0).html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it("renders correct text", () => {
    expect(
      notification.contains(<p>Here is the list of notifications</p>)
    ).toBe(true);
  });

  it("renders menuItem and not Notifications.div", () => {
    expect(notification.find(".Notifications").exists()).toEqual(true);
    expect(notification.find(".menuItem").exists()).toEqual(true);
  });
});

describe("testing notification component with no listNotification", () => {
  const notification = shallow(<Notification displayDrawer={true} />);
  it("renders without crashing", () => {
    expect(notification).toBeDefined();
  });

  it("renders correct text", () => {
    expect(
      notification
        .find("ul")
        .contains(<NotificationItem value={"No new notification for now"} />)
    ).toBe(true);
  });

  it("renders one NotificationItem", () => {
    expect(notification.find("ul").children()).toHaveLength(1);
  });

  it("renders the correct text", () => {
    expect(notification.find("ul").children()).toHaveLength(1);
  });

  it("renders menuItem and not Notifications.div", () => {
    notification.setProps({ displayDrawer: true, listNotifications: [] });
    expect(notification.find("ul").children()).toHaveLength(1);
    expect(notification.find(".Notifications").exists()).toEqual(true);
    expect(notification.find(".menuItem").exists()).toEqual(true);
  });
});
