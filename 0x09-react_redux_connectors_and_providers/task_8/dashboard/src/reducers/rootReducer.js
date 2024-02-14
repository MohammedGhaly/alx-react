import { Map } from "immutable";
import { courseReducer, initialCourseState } from "./courseReducer";
import { uiReducer, initialUiState } from "./uiReducer";
import {
  notificationReducer,
  initialNotificationsState,
} from "./notificationReducer";

export const initialRootState = {
  ui: Map(initialUiState),
  notifications: Map(initialNotificationsState),
  courses: Map(initialCourseState),
};

const rootReducer = {
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
};

export default rootReducer;
