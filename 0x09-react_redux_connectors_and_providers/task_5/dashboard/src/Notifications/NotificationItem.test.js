import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import { jest } from "@jest/globals";
import { StyleSheetTestUtils } from "aphrodite";

// Suppress style injection during tests
StyleSheetTestUtils.suppressStyleInjection();

describe("Testing <NotificationItem />", () => {
  let wrapper;

  it("<NotificationItem /> renders without crashing", () => {
    wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists());
  });

  it("<NotificationItem />  renders the correct html by passing dummy type and value props,", () => {
    wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find("li").text()).toBe("test");
    expect(wrapper.find("li").prop("data-notification-type")).toBe("default");
  });

  it("<NotificationItem />  renders the correct html by passing a dummy html prop,", () => {
    wrapper = shallow(<NotificationItem html={{ __html: "<u>test</u>" }} />);
    expect(
      wrapper
        .find("li")
        .html()
        .startsWith('<li data-notification-type="default"')
    ).toBe(true);
  });
});

describe("Testing <NotificationItem /> <li ...>", () => {
  it("should call console.log when it is clicked", () => {});
  const wrapper = shallow(<NotificationItem />);
  const spy = jest.fn();
  wrapper.setProps({ value: "test value", markAsRead: spy, id: 5 });

  wrapper.find("li").props().onClick();
  expect(spy).toBeCalledTimes(1);
  expect(spy).toBeCalledWith(5);
  spy.mockRestore();
});
