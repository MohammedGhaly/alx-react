import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";

export const initialState = { notifications: [], filter: "DEFAULT" };

export function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map((item) => ({ ...item, isRead: false })),
      };

    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((item) => ({
          ...item,
          isRead: action.index === item.id ? true : item.isRead,
        })),
      };

    case SET_TYPE_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}
