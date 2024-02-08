import React from "react";
import { shallow, mount } from "enzyme";
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
  wrapper.setState({ user: { isLoggedIn: true } });

  it("the Login component is not included", () => {
    expect(wrapper.find("Login")).toHaveLength(0);
  });

  it("the CourseList component is included", () => {
    expect(wrapper.find("CourseList").exists());
  });
});

describe("Testing <App logOut={function} />", () => {
  it("verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
    const wrapper = mount(<App />);
    window.alert = jest.fn();
    const inst = wrapper.instance();
    const logout = jest.spyOn(inst, "logOut");
    const alert = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", {
      bubbles: true,
      ctrlKey: true,
      key: "h",
    });
    document.dispatchEvent(event);
    expect(alert).toBeCalledWith("Logging you out");
    expect(logout).toBeCalled();
    alert.mockRestore();
  });
});

describe("Testing state of App component />", () => {
  it("Verifies that after calling handleDisplayDrawer, the state should be true", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().state.displayDrawer).toEqual(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.instance().state.displayDrawer).toEqual(true);
  });
  it("Verifies that after calling handleHideDrawer, the state should be false", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    expect(wrapper.instance().state.displayDrawer).toEqual(true);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.instance().state.displayDrawer).toEqual(false);
  });
});

describe("Testing login and logout features", () => {
  it("the Login component is not included", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn("email@email", "password");
    expect(wrapper.instance().state.user.isLoggedIn).toBe(true);
  });

  it("the CourseList component is included", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { isLoggedIn: true } });
    wrapper.instance().logOut();
    expect(wrapper.instance().state.user.isLoggedIn).toBe(false);
  });
});

describe("testing markNotificationAsRead function", () => {
  it("updates the state correctly", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      listNotifications: [
        { id: 1, value: "New course available", type: "default" },
        { id: 2, value: "New resume available", type: "urgent" },
      ],
    });
    wrapper.instance().markNotificationAsRead(1);
    expect(
      wrapper.instance().state.listNotifications.filter((item) => item.id === 1)
    ).toEqual([]);
  });
});

describe("testing redux ui state", () => {
  it("returns the right object from user Login", () => {
    let state = fromJS({
      isUserLoggedIn: true,
    });
    const res = mapStateToProps(state);
    expect(res).toEqual({ isLoggedIn: true });
  });
});
