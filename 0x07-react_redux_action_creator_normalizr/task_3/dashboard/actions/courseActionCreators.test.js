import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("testing action creators", () => {
  it("returns the 'SELECT_COURSE' action with proper structure", () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  });
  it("returns the 'UNSELECT_COURSE' action with proper structure", () => {
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
