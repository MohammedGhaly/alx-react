import {
  markAsAread,
  setNotificationFilter,
  setLoadingState,
  setNotifications,
  fetchNotifications,
} from "./notificationActionCreators";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
  NotificationTypeFilters,
} from "./notificationActionTypes";

describe("testing notification action creators", () => {
  it("returns the 'MARK_AS_READ' action with proper structure", () => {
    expect(markAsAread(1)).toEqual({ type: MARK_AS_READ, index: 1 });
  });
  it("returns the 'SET_TYPE_FILTER' action with proper structure", () => {
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual({
      type: SET_TYPE_FILTER,
      filter: "DEFAULT",
    });
  });

  it("returns the 'SET_LOADING_STATE' action with the correct structure", function () {
    const expectedReturn = {
      type: SET_LOADING_STATE,
      loading: true,
    };

    const result = setLoadingState(true);

    expect(result).toEqual(expectedReturn);
  });
  it("returns the FETCH_NOTIFICATIONS_SUCCESS action with the correct structure", function () {
    const data = { 1: { a: "Hello" }, 2: { b: "There" } };

    const expectedReturn = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data,
    };

    const result = setNotifications(data);

    expect(result).toEqual(expectedReturn);
  });
});
