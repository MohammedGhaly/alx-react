import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";

describe("Bodysection component tests", () => {
  it("renders title h2 and children ", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    expect(wrapper.find("h2")).toHaveLength(1);
    expect(wrapper.find("h2").text()).toEqual("test title");
    expect(wrapper.find("p")).toHaveLength(1);
    expect(wrapper.find("p").text()).toEqual("test children node");
  });
});
