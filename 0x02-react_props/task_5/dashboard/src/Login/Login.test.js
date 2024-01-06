import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

describe("Login component tests", () => {
  const login = shallow(<Login />);
  it("renders wihtout crashing", () => {
    expect(login.exists()).toEqual(true);
  });
  it("has 2 label elements", () => {
    expect(login.find("label")).toHaveLength(2);
    expect(login.find("input")).toHaveLength(2);
  });
});
