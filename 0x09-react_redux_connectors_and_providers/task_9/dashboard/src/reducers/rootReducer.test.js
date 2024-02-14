import rootReducer from "./rootReducer";
import { combineReducers } from "redux";
import { Map } from "immutable";

describe("rootReducer tests", function () {
  it("verifies the state returned by the rootReducer function equals the initial state", function () {
    const expected = {
      courses: Map({}),
      notifications: Map({}),
      ui: Map({}),
    };

    const reducer = combineReducers(rootReducer);
    const state = reducer(undefined, { type: "RANDOM" });

    for (const key in expected) {
      expect(state[key]).toBeTruthy();
      expect(typeof expected[key]).toEqual(typeof state[key]);
    }
  });
});
