import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";
import { mount } from "enzyme";

StyleSheetTestUtils.suppressStyleInjection();

describe("Login component", () => {
  it("renders without crashing", () => {
    shallow(<Login />);
  });

  it("renders input and label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input")).toHaveLength(3);
    expect(wrapper.find("label")).toHaveLength(2);
  });
});

describe("testing the submit button", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Login />);
  });

  it("verifies that the submit button is disabled by default", () => {
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
  });

  it("verifies changing the value of the two inputs enables the button", () => {
    wrapper.find("#email").simulate("change", { target: { value: "email" } });
    wrapper.find("#password").simulate("change", { target: { value: "pass" } });
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(
      false
    );
  });
});
