import React from "react";
import { mount, shallow } from "enzyme";
import Footer from "./Footer";
import { StyleSheetTestUtils } from "aphrodite";
import { appContext } from "../App/AppContext";

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

describe("testing contact us p element in Footer component", () => {
  it("renders contact us link when logged in", () => {
    const wrapper = mount(
      <appContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </appContext.Provider>
    );
    expect(wrapper.find(".contact-us-link").exists()).toBe(true);
  });

  it("doesn't render contact us link when logged out", () => {
    const wrapper = mount(
      <appContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </appContext.Provider>
    );
    expect(wrapper.find(".contact-us-link").exists()).toBe(false);
  });
});
