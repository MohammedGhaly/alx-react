import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login,
  logout,
} from "./uiActionCreators";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGOUT,
} from "./uiActionTypes";

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
