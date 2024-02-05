import { Map, fromJS } from "immutable";
import { notificationReducer } from "./notificationReducer";

import { initialState } from "./notificationReducer";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";

describe("notifications reducer tests", () => {
  it("returns the correct default state", () => {
    expect(notificationReducer(undefined, {})).toEqual(Map(initialState));
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

    const data = [
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
    ];
    const normalizedData = notificationsNormalizer(data);

    const expected = {
      filter: "DEFAULT",
      ...normalizedData,
    };
    expected.notifications[1].isRead = false;
    expected.notifications[2].isRead = false;
    expected.notifications[3].isRead = false;

    const state = notificationReducer(undefined, action);

    expect(state.toJS()).toEqual(expected);
  });

  it("returns the correct state when action is MARK_AS_READ", function () {
    const initialState = {
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

    initialState.notifications = notificationsNormalizer(
      initialState.notifications
    ).notifications;

    const action = {
      type: MARK_AS_READ,
      index: 2,
    };

    const data = [
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
    ];

    const normalizedData = notificationsNormalizer(data);

    const expectedData = {
      filter: "DEFAULT",
      ...normalizedData,
    };
    expectedData.notifications[1].isRead = false;
    expectedData.notifications[2].isRead = true;
    expectedData.notifications[3].isRead = false;

    const state = notificationReducer(fromJS(initialState), action);
    console.log(state.toJS());
    expect(state.toJS()).toEqual(expectedData);
  });

  it("returns the correct state when action is SET_TYPE_FILTER", () => {
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

    oldState.notifications = notificationsNormalizer(
      oldState.notifications
    ).notifications;

    const action = {
      type: SET_TYPE_FILTER,
      filter: "URGENT",
    };

    const data = [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        isRead: false,
        value: "New resume available",
      },
      {
        id: 3,
        type: "urgent",
        isRead: false,
        value: "New data available",
      },
    ];

    const normalizedData = notificationsNormalizer(data);

    const expected = {
      filter: "URGENT",
      ...normalizedData,
    };

    const state = notificationReducer(fromJS(oldState), action);

    expect(state.toJS()).toEqual(expected);
  });
});
