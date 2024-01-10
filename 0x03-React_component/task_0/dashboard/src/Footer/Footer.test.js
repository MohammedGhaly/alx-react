import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

describe("Footer components tests", () => {
  const footer = shallow(<Footer />);
  it("renders without crashing", () => {
    expect(footer).toBeDefined();
  });

  it("renders the text 'Copyright'", () => {
    expect(footer.text().includes("Copyright")).toEqual(true);
  });
});
