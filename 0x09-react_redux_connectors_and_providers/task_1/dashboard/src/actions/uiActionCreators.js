import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./uiActionTypes";

export function login(email, password) {
  return { type: LOGIN, user: { email, password } };
}
export const boundLogin = (email, password) => dispatch(login(email, password));

export function logout() {
  return { type: LOGOUT };
}
export const boundLogout = () => dispatch(logout());

export function displayNotificationDrawer() {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
}
export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());

export function hideNotificationDrawer() {
  return { type: HIDE_NOTIFICATION_DRAWER };
}
export const boundHideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());

export function loginSuccess() {
  return { type: LOGIN_SUCCESS };
}
export function loginFailure() {
  return { type: LOGIN_FAILURE };
}

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch("http://localhost:8564/login-success.json")
      .then((res) => res.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };
};
