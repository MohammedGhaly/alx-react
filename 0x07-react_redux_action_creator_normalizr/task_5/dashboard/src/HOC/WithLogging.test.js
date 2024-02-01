import React from "react";
import { shallow } from "enzyme";
import { jest } from "@jest/globals";
import WithLogging from "./WithLogging";
import Login from "../Login/Login";

const TestComponent = () => <div>test component</div>;

describe("WithLogging HOC tests", () => {
  it("calls console.log on mount and on unmount", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const NewComponent = WithLogging(TestComponent);
    const wrapper = shallow(<NewComponent />);

    expect(spy).toBeCalledTimes(1);
    wrapper.unmount();
    expect(spy).toBeCalledTimes(2);
    spy.mockRestore();
  });

  it("calls console.log with the right text on mount and on unmount", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const NewComponent = WithLogging(Login);
    const wrapper = shallow(<NewComponent />);

    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith("Component Login is mounted");
    wrapper.unmount();
    expect(spy).toBeCalledTimes(2);
    expect(spy).toBeCalledWith("Component Login is going to unmount");
    spy.mockRestore();
  });
});
