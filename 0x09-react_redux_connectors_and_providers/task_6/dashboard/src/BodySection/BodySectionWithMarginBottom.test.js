import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";
import { StyleSheetTestUtils } from "aphrodite";

// Suppress style injection during tests
StyleSheetTestUtils.suppressStyleInjection();

describe("BodysectionWithMarginBottom component tests", () => {
  it("renders a BodySection component and \
  the props are are passed correctly to the child component ", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title={"test title"} />
    );

    const bodySectionWrapper = wrapper.find("BodySection");
    expect(bodySectionWrapper).toHaveLength(1);
    expect(wrapper.find(BodySection).html()).toEqual(
      '<div class="bodySection"><h2>test title</h2></div>'
    );
  });
});
