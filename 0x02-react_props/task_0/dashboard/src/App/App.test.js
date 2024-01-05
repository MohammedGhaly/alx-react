import React from "react";
import App from "./App";
import { shallow } from "enzyme";

import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

describe("app components tests", () => {
  it("renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });

  it("renders a div with the class 'App-header'", () => {
    const app = shallow(<App />);
    expect(app.find(".App-header")).toBeDefined();
  });

  it("renders a div with the class 'App-body'", () => {
    const app = shallow(<App />);
    expect(app.find(".App-body")).toBeDefined();
  });

  it("renders a div with the class 'App-footer'", () => {
    const app = shallow(<App />);
    expect(app.find(".App-footer")).toBeDefined();
  });
});
