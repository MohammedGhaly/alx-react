import { notificationReducer } from "./notificationReducer";
import { initialState } from "./notificationReducer";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";

describe("notifications reducer tests", () => {
  it("returns the correct default state", () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it("returns the correct state when action is FETCH_NOTIFICATIONS_SUCCESS", () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    const expected = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expected);
  });

  it("returns the correct state when action is MARK_AS_READ", () => {
    const action = {
      type: MARK_AS_READ,
      index: 2,
    };
    const oldState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };
    const expected = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: true,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    const state = notificationReducer(oldState, action);
    expect(state).toEqual(expected);
  });

  it("returns the correct state when action is SET_TYPE_FILTER", () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: "URGENT",
    };
    const oldState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };
    const expected = {
      filter: "URGENT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    const state = notificationReducer(oldState, action);
    expect(state).toEqual(expected);
  });
});
