import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";
import React from "react";

import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

describe("CourseListRow component tests", () => {
  const wrapper = shallow(<CourseListRow />);

  it("renders one cell with colspan = 2", () => {
    wrapper.setProps({
      isHeader: true,
      textFirstCell: "first cell",
    });
    expect(wrapper.find("th").prop("colSpan")).toEqual(2);
  });

  it("renders 2 cells", () => {
    wrapper.setProps({
      isHeader: true,
      textFirstCell: "first cell",
      textSecondCell: "second cell",
    });
    expect(wrapper.find("th")).toHaveLength(2);
  });

  it("renders 2 cells", () => {
    wrapper.setProps({
      isHeader: false,
      textFirstCell: "first cell",
      textSecondCell: "second cell",
    });
    expect(wrapper.find("tr").exists()).toEqual(true);
    expect(wrapper.find("tr").find("td")).toHaveLength(2);
  });
});
