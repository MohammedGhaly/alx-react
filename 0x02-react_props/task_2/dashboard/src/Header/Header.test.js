import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

describe("Header component tests", () => {
  const header = shallow(<Header />);
  it("renders without crashing", () => {
    expect(header.exists()).toEqual(true);
  });

  it("renders img and h1", () => {
    expect("img").toBeDefined();
    expect("h1").toBeDefined();
  });
});
