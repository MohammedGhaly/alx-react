import * as notifications from "../../notifications.json";

export default function getAllNotificationsByUser(userId) {
  return notifications.default
    .filter((item) => item.author.id === userId)
    .map((item) => item.context);
}
