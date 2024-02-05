import { courseReducer } from "./courseReducer";
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from "../actions/courseActionTypes";

describe("course reducer tests", () => {
  it("returns the correct default state", () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });
  it("returns the correct state when action is FETCH_COURSE_SUCCESS", () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: "ES6",
          credit: 60,
        },
        {
          id: 2,
          name: "Webpack",
          credit: 20,
        },
        {
          id: 3,
          name: "React",
          credit: 40,
        },
      ],
    };

    const expected = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    const state = courseReducer(undefined, action);
    expect(state).toEqual(expected);
  });
  it("returns the correct state when action is SELECT_COURSE", () => {
    const action = {
      type: SELECT_COURSE,
      index: 2,
    };
    const oldState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];
    const expected = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    const state = courseReducer(oldState, action);
    expect(state).toEqual(expected);
  });
  it("returns the correct state when action is UNSELECT_COURSE", () => {
    const action = {
      type: UNSELECT_COURSE,
      index: 2,
    };
    const oldState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];
    const expected = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    const state = courseReducer(oldState, action);
    expect(state).toEqual(expected);
  });
});
