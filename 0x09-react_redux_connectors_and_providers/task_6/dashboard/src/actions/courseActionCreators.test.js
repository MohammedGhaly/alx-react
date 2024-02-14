import fetchMock from "fetch-mock";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("testing course action creators", () => {
  it("returns the 'SELECT_COURSE' action with proper structure", () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  });
  it("returns the 'UNSELECT_COURSE' action with proper structure", () => {
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
  it("verifies that fetchCourses is working correctly", () => {
    const store = mockStore({});
    fetchMock.restore();

    fetchMock.get("./courses.json", "{}");

    return store.dispatch(fetchCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(setCourses({}));
    });
  });
});
