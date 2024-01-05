import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";
import React from "react";

import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

describe("CourseList component tests", () => {
  const wrapper = shallow(<CourseList />);

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("renders 5 different rows", () => {
    expect(wrapper.find("thead").children()).toHaveLength(2);
    wrapper.find("thead").forEach((node) => {
      expect(node.equals(<CourseListRow />));
    });
    expect(wrapper.find("tbody").children()).toHaveLength(3);
    wrapper.find("tbody").forEach((node) => {
      expect(node.equals(<CourseListRow />));
    });
  });
});
