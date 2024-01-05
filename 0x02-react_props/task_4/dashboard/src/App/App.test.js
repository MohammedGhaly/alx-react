import React from "react";
import App from "./App";
import Notification from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";

import { shallow } from "enzyme";

import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

describe("app components tests", () => {
  const app = shallow(<App />);

  it("renders without crashing", () => {
    expect(app).toBeDefined();
  });

  it("renders the component Notifications", () => {
    expect(app.contains(<Notification />)).toBe(true);
  });
  it("renders the component Header", () => {
    expect(app.contains(<Header />)).toBe(true);
  });
  it("renders the component Footer", () => {
    expect(app.contains(<Footer />)).toBe(true);
  });
  it("renders the component Login", () => {
    expect(app.contains(<Login />)).toBe(true);
  });

  it("renders the component Login and not CourseList", () => {
    expect(app.contains(<CourseList />)).toBe(false);
  });
});

describe("app component tests when Logged in", () => {
  const app = shallow(<App isLoggedIn={true} />);

  it("doesn't render Login", () => {
    expect(app.contains(<Login />)).toBe(false);
  });

  it("renders CourseList", () => {
    expect(app.contains(<CourseList />)).toBe(true);
  });
});
