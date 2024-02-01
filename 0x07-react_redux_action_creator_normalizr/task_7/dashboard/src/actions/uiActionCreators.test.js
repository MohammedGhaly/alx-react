import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  login,
  logout,
  loginSuccess,
  loginFailure,
} from "./uiActionCreators";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGOUT,
} from "./uiActionTypes";

import fetchMock from "fetch-mock";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import "node-fetch";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("testing ui action creators", () => {
  it("returns the 'LOGOUT' action with proper structure", () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });
  it("returns the 'LOGIN' action with proper structure", () => {
    expect(login("email", "password")).toEqual({
      type: LOGIN,
      user: { email: "email", password: "password" },
    });
  });
  it("returns the 'DISPLAY_NOTIFICATION_DRAWER' action with proper structure", () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });
  it("returns the 'HIDE_NOTIFICATION_DRAWER' action with proper structure", () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});

describe("Async action creators tests", function () {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should verify that if the API returns the right response, the store received two actions LOGIN and LOGING_SUCCESS", () => {
    const store = mockStore({});

    const user = {
      email: "test@test.com",
      password: "123456",
    };

    fetchMock.get("http://localhost:8564/login-success.json", "{}");

    return store.dispatch(loginRequest(user.email, user.password)).then(() => {
      const actions = store.getActions();
      console.log(`actions[0] = ${actions[0]}`);
      console.log(`actions[1] = ${actions[1]}`);
      expect(actions[0]).toEqual(login(user.email, user.password));
      expect(actions[1]).toEqual(loginSuccess());
    });
  });

  it("should verify that if the API query fails, the store received two actions LOGIN and LOGIN_FAILURE", () => {
    const store = mockStore({});

    fetchMock.mock("http://localhost:8564/login-success.json", 500);

    const user = {
      email: "test@test.com",
      password: "123456",
    };

    return store.dispatch(loginRequest(user.email, user.password)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(login(user.email, user.password));
      expect(actions[1]).toEqual(loginFailure());
    });
  });
});
