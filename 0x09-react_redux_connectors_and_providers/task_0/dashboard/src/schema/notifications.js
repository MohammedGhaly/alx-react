import * as notifications from "../../dist/notifications.json";

import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalizedData = normalize(notifications.default, [notification]);

export { normalizedData };

export function notificationsNormalizer(data) {
  const normalizedData = normalize(data, [notification]);
  return normalizedData.entities;
}

export default function getAllNotificationsByUser(userId) {
  let userContexts = [];

  for (let key in normalizedData.entities.notifications) {
    if (normalizedData.entities.notifications[key].author === userId) {
      userContexts.push(
        normalizedData.entities.messages[
          normalizedData.entities.notifications[key].context
        ]
      );
    }
  }

  return userContexts;
}
