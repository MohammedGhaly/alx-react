import {
  markAsAread,
  setNotificationFilter,
} from "./notificationActionCreators";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
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
});
