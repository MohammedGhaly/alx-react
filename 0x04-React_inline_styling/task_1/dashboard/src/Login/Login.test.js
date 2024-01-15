import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

// Suppress style injection during tests
StyleSheetTestUtils.suppressStyleInjection();

describe("Login component", () => {
  it("renders without crashing", () => {
    shallow(<Login />);
  });

  it("renders input and label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input")).toHaveLength(2);
    expect(wrapper.find("label")).toHaveLength(2);
  });
});
