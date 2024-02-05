import { reducer } from "./uiReducer";
import { initialState } from "./uiReducer";
import { selectCourse } from "../actions/courseActionCreators";
import { displayNotificationDrawer } from "../actions/uiActionCreators";

describe("", () => {
  it("should return the initial state when no action is passed", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it("should return the initial state when action SELECT_COURSE is passed", () => {
    expect(reducer(undefined, selectCourse(1))).toEqual(initialState);
  });
  it("should change 'isNotificationDrawerVisible' correctly when action 'DISPLAY_NOTIFICATION_DRAWER' is passed", () => {
    expect(
      reducer(undefined, displayNotificationDrawer())
        .isNotificationDrawerVisible
    ).toEqual(true);
  });
});
