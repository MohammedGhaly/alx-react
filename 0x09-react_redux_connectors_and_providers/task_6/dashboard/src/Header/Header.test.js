import React from "react";
import { appContext } from "../App/AppContext";
import { Header } from "./Header";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("Header component", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("renders img and h1 tags", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img")).toHaveLength(1);
    expect(wrapper.find("h1")).toHaveLength(1);
  });
});

describe("Header component logoutSection", () => {
  it("renders logoutSection when logged in", () => {
    const wrapper = shallow(<Header />, {
      context: React.createContext(appContext),
    });
    expect(wrapper.find("#logoutSection").exists()).toBe(false);
    wrapper.setContext({
      user: { email: "email", password: "pass", isLoggedIn: true },
      logOut: () => {},
    });
    expect(wrapper.find("#logoutSection").exists());
  });
});
