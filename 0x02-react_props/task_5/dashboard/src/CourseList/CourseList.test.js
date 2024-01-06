import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";
import React from "react";

import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

describe("CourseList component tests", () => {
  const wrapper = shallow(<CourseList />);

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  wrapper.setProps({ listCourses: [] });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("renders 1 empty row", () => {
    expect(wrapper.find("thead").children()).toHaveLength(2);
    wrapper.find("thead").forEach((node) => {
      expect(node.equals(<CourseListRow />));
    });
    expect(wrapper.find("tbody").children()).toHaveLength(1);
    wrapper.find("tbody").forEach((node) => {
      expect(node.equals(<CourseListRow />));
    });
  });

  const courseList = shallow(<CourseList listCourses={listCourses} />);
  it("renders without crashing", () => {
    expect(courseList.exists()).toBeTruthy();
    expect(courseList.find("tbody").children()).toHaveLength(
      listCourses.length
    );
  });
});
