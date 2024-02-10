import { uiReducer } from "./uiReducer";
import { initialState } from "./uiReducer";
import { selectCourse } from "../actions/courseActionCreators";
import { displayNotificationDrawer } from "../actions/uiActionCreators";
import { Map } from "immutable";

describe("", () => {
  it("should return the initial state when no action is passed", () => {
    expect(uiReducer(undefined, {})).toEqual(Map(initialState));
  });
  it("should return the initial state when action SELECT_COURSE is passed", () => {
    expect(uiReducer(undefined, selectCourse(1))).toEqual(Map(initialState));
  });
  it("should change 'isNotificationDrawerVisible' correctly when action 'DISPLAY_NOTIFICATION_DRAWER' is passed", () => {
    expect(
      uiReducer(undefined, displayNotificationDrawer()).get(
        "isNotificationDrawerVisible"
      )
    ).toEqual(true);
  });
});
