import { Map } from "immutable";
import { notificationReducer } from "../reducers/notificationReducer";
import * as selectors from "./notificationSelector";

describe("Testing notifications selectors", () => {
  it("test that filterTypeSelected works as expected", () => {
    const state = notificationReducer();
    const selectedData = selectors.filterTypeSelected(state);
    expect(selectedData).toEqual("DEFAULT");
  });

  it("returns an empty list of message entities", () => {
    const state = notificationReducer();
    const selectedData = selectors.getNotifications(state);
    expect(selectedData).toEqual(Map([]));
  });

  it("returns a non-empty list of message entities", () => {
    const state = notificationReducer(
      Map({
        notifications: {
          1: {
            id: 1,
            type: "default",
            value: "New course available",
            isRead: true,
          },
          2: {
            id: 2,
            type: "urgent",
            value: "New resume available",
            isRead: false,
          },
          3: {
            id: 3,
            type: "urgent",
            value: "New data available",
            isRead: false,
          },
        },
        filter: "DEFAULT",
      })
    );
    const selectedData = selectors.getNotifications(state);
    expect(selectedData).toEqual(
      Map({
        1: {
          id: 1,
          type: "default",
          value: "New course available",
          isRead: true,
        },
        2: {
          id: 2,
          type: "urgent",
          value: "New resume available",
          isRead: false,
        },
        3: {
          id: 3,
          type: "urgent",
          value: "New data available",
          isRead: false,
        },
      })
    );
  });

  it("returns a list of unread message entities", () => {
    const state = notificationReducer(
      Map({
        notifications: {
          1: {
            id: 1,
            type: "default",
            value: "New course available",
            isRead: true,
          },
          2: {
            id: 2,
            type: "urgent",
            value: "New resume available",
            isRead: false,
          },
          3: {
            id: 3,
            type: "urgent",
            value: "New data available",
            isRead: false,
          },
        },
        filter: "DEFAULT",
      })
    );
    const selectedData = selectors.getUnreadNotifications(state);
    expect(selectedData).toEqual(
      Map({
        2: {
          id: 2,
          type: "urgent",
          value: "New resume available",
          isRead: false,
        },
        3: {
          id: 3,
          type: "urgent",
          value: "New data available",
          isRead: false,
        },
      })
    );
  });
});
