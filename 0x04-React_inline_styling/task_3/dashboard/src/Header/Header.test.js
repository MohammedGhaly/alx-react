import React from "react";

import Header from "./Header";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

// Suppress style injection during tests
StyleSheetTestUtils.suppressStyleInjection();

describe("Header component", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("renders img and h1 tags", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img")).toHaveLength(1);
    expect(wrapper.find("h1")).toHaveLength(1);
  });
});
