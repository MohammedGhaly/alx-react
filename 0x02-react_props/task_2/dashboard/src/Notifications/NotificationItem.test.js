import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";
import React from "react";

import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

describe("NotificationItem component tests", () => {
  const wrapper = shallow(<NotificationItem />);
  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });
  it(" it renders the correct html, by passing dummy type and value", () => {
    wrapper.setProps({ type: "default", value: "test" });
    expect(wrapper.html()).toEqual(
      '<li data-notification-type="default">test</li>'
    );
  });
  it(" it renders the correct html, by passing html value", () => {
    const wrapper = shallow(<NotificationItem />);
    wrapper.setProps({ html: "<u>testing</u>" });
    expect(wrapper.html()).toEqual(
      '<li data-notification-type="default"><u>testing</u></li>'
    );
  });
});
