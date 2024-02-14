import React from "react";
import { shallow } from "enzyme";
import { jest } from "@jest/globals";
import { App } from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { StyleSheetTestUtils } from "aphrodite";
import { appContext } from "./AppContext";
import { mapStateToProps } from "./App";
import { fromJS } from "immutable";

// Suppress style injection during tests
StyleSheetTestUtils.suppressStyleInjection();

describe("Test App.js", () => {
  it("App without crashing", (done) => {
    expect(shallow(<App />).exists());
    done();
  });

  it("div with the class App-header", (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<header className="App-header" />));
    done();
  });

  it("div with the class App-body", (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<body className="App-body" />));
    done();
  });

  it("div with the class App-footer", (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<footer className="App-footer" />));
    done();
  });

  it("contains the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it("Test to check that CourseList is not displayed inside App", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { isLoggedIn: false } });
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });
});

describe("Testing <App /> while LoggedIn=true", () => {
  const wrapper = shallow(<App />);
  wrapper.setProps({ isLoggedIn: true });

  it("the Login component is not included", () => {
    expect(wrapper.find("Login")).toHaveLength(0);
  });

  it("the CourseList component is included", () => {
    expect(wrapper.find("CourseList").exists());
  });
});

describe("testing redux ui state", () => {
  it("returns the right object from user Login", () => {
    let state = {
      ui: fromJS({
        isUserLoggedIn: true,
      }),
    };
    const res = mapStateToProps(state);
    expect(res).toEqual({ isLoggedIn: true });
  });
  it("mapStateToProps returns the right object from display Drawer", () => {
    let state = {
      ui: fromJS({
        isNotificationDrawerVisible: true,
      }),
    };
    const result = mapStateToProps(state);
    expect(result).toEqual({ displayDrawer: true });
  });
});
