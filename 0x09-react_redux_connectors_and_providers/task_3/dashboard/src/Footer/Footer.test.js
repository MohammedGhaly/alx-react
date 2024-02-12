import { shallow } from "enzyme";
import React from "react";
import { Footer } from "./Footer";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("<Footer />", () => {
  it("Footer renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify that the components at the very least render the text “Copyright”", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain("Copyright");
  });

  it("verify that the link is not displayed when the user is logged out within the context", () => {
    const wrapper = shallow(<Footer user={null} />);
    expect(wrapper.find("div.footer a")).toHaveLength(0);
  });

  it("verify that the link is displayed when the user is logged in within the context", () => {
    const wrapper = shallow(
      <Footer user={{ email: "larry@hd.com", password: "123456" }} />
    );
    expect(wrapper.find("a.contact-us-link").exists()).toEqual(true);
    expect(wrapper.find("a.contact-us-link").text()).toEqual("Contact us");
  });
});
