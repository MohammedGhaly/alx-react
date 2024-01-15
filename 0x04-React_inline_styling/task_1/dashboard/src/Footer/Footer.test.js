import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import { StyleSheetTestUtils } from "aphrodite";

// Suppress style injection during tests
StyleSheetTestUtils.suppressStyleInjection();

describe("Footer component", () => {
  it("render without crashing", () => {
    shallow(<Footer />);
  });

  it("render the text Copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain("Copyright");
  });
});
