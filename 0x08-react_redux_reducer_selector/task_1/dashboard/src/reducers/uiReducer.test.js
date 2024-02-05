import { reducer } from "./uiReducer";
import { initialState } from "./uiReducer";
import { selectCourse } from "../actions/courseActionCreators";
import { displayNotificationDrawer } from "../actions/uiActionCreators";
import { Map } from "immutable";

describe("", () => {
  it("should return the initial state when no action is passed", () => {
    expect(reducer(undefined, {})).toEqual(Map(initialState));
  });
  it("should return the initial state when action SELECT_COURSE is passed", () => {
    expect(reducer(undefined, selectCourse(1))).toEqual(Map(initialState));
  });
  it("should change 'isNotificationDrawerVisible' correctly when action 'DISPLAY_NOTIFICATION_DRAWER' is passed", () => {
    expect(
      reducer(undefined, displayNotificationDrawer()).get(
        "isNotificationDrawerVisible"
      )
    ).toEqual(true);
  });
});
