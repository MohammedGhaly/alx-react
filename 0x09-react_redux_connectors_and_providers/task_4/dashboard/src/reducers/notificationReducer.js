import { Map } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";

export const initialNotificationsState = {
  notifications: [],
  filter: "DEFAULT",
};

export function notificationReducer(
  state = Map(initialNotificationsState),
  action = {}
) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      Object.keys(normalizedData.notifications).forEach((key) => {
        normalizedData.notifications[key].isRead = false;
      });
      return state.merge(normalizedData);

    case MARK_AS_READ:
      return state.setIn(
        ["notifications", String(action.index), "isRead"],
        true
      );

    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);

    default:
      return state;
  }
}
