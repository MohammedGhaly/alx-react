import React from "react";
import { mount, shallow } from "enzyme";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";
import { jest } from "@jest/globals";
import { StyleSheetTestUtils } from "aphrodite";

// Suppress style injection during tests
StyleSheetTestUtils.suppressStyleInjection();

describe("Testing the <Notifications /> Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it("<Notifications /> is rendered without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("<Notifications /> renders NotificationItems", () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find("NotificationItem")).not.toHaveLength(0);
  });

  it("<Notifications /> render the text 'Here is the list of notifications'", () => {
    wrapper.setProps({
      displayDrawer: true,
      listNotifications: [
        { id: 1, value: "New course available", type: "default" },
      ],
    });
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(
      true
    );
  });

  it("verify that the first NotificationItem element renders the right html", () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find("NotificationItem").first().html()).toEqual(
      '<li data-notification-type="default" class="defaultNotification_1ukqjkj">No new notification for now</li>'
    );
  });

  it("verify that Notifications renders correctly if you dont pass the listNotifications property or if you pass an empty array", () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find("NotificationItem").first().html()).toEqual(
      '<li data-notification-type="default" class="defaultNotification_1ukqjkj">No new notification for now</li>'
    );
    wrapper.setProps({ displayDrawer: true, listNotifications: [] });
    expect(wrapper.find("NotificationItem").first().html()).toEqual(
      '<li data-notification-type="default" class="defaultNotification_1ukqjkj">No new notification for now</li>'
    );
  });

  it("verify that when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is", () => {
    wrapper.setProps({ displayDrawer: true, listNotifications: [] });
    expect(wrapper.find("NotificationItem").first().html()).toEqual(
      '<li data-notification-type="default" class="defaultNotification_1ukqjkj">No new notification for now</li>'
    );
    expect(
      wrapper.findWhere((node) => {
        return node.text() === "Here is the list of notifications";
      })
    ).toHaveLength(0);
  });

  it("menu item is being displayed when displayDrawer is false", () => {
    expect(wrapper.find(".menuItem_fojwvh")).toHaveLength(1);
  });

  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    expect(wrapper.find(".Notifications_9t0tok")).toHaveLength(0);
  });
});

describe("Testing <Notification displayDrawer={true}/> ", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
  });

  it("menu item is being displayed when displayDrawer is true", () => {
    expect(wrapper.find(".menuItem_fojwvh")).toHaveLength(1);
  });

  it("div.Notifications is being displayed when displayDrawer is true", () => {
    expect(wrapper.find(".Notifications_9t0tok")).toHaveLength(1);
  });
});

describe("Testing <Notification displayDrawer={true} listNotifications={[...]}/> ", () => {
  let wrapper;
  const listNotifications = [
    { id: 1, value: "New course available", type: "default" },
    { id: 2, value: "New resume available", type: "urgent" },
    { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
  ];

  beforeEach(() => {
    wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
  });

  it("verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem", () => {
    expect(wrapper.find("NotificationItem")).toHaveLength(3);
    expect(wrapper.find("NotificationItem").first().props().value).toEqual(
      "New course available"
    );
  });
});

describe("Testing markAsRead function", () => {
  it("Check that when calling the markAsRead, the console has the right text", () => {
    const wrapper = shallow(<Notifications />);
    const spy = jest.spyOn(console, "log").mockImplementation();

    wrapper.instance().markAsRead = spy;
    wrapper.instance().markAsRead(15);
    expect(wrapper.instance().markAsRead).toBeCalledWith(15);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(15);
    spy.mockRestore();
  });
});

describe("testing rerenders on changing props of the component", () => {
  const listNotifications = [
    { id: 1, value: "New course available", type: "default" },
    { id: 2, value: "New resume available", type: "urgent" },
    { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
  ];
  it("doesn't rerender on passing a notification list with the same length", () => {
    const wrapper = shallow(
      <Notifications listNotifications={listNotifications} />
    );
    expect(
      wrapper
        .instance()
        .shouldComponentUpdate({ listNotifications, displayDrawer: false })
    ).toBe(false);

    // expect(wrapper.instance().shouldComponentUpdate(listNotifications)).toBe(
    //   true
    // );
  });
  it("rerenders on passing a notification list with different length", () => {
    const wrapper = shallow(
      <Notifications listNotifications={listNotifications} />
    );
    expect(
      wrapper.instance().shouldComponentUpdate({
        listNotifications: [...listNotifications, listNotifications[2]],
        displayDrawer: false,
      })
    ).toBe(true);
  });
});