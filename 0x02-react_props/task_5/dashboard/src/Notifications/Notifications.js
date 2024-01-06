import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

Notification.prototypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default function Notification({ displayDrawer, listNotifications }) {
  return (
    <div className="notifications-container">
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <p>
            {listNotifications.length > 0 &&
              "Here is the list of notifications"}
          </p>
          <ul>
            {listNotifications !== undefined &&
              (listNotifications.length === 0 ? (
                <NotificationItem value={"No new notification for now"} />
              ) : (
                listNotifications.map(({ id, __html, type, value }) => (
                  <NotificationItem
                    key={id}
                    value={value}
                    html={__html}
                    type={type}
                  />
                ))
              ))}
          </ul>
          <button
            className="close-btn"
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              minHeight: "24px",
              minWidth: "24px",
            }}
            aria-label="Close"
            onClick={() => {
              console.log("Close button has been clicked");
            }}
          >
            <img
              src={closeIcon}
              alt="close icon"
              style={{
                display: "inline",
                height: "14px",
                width: "14px",
              }}
            />
          </button>
        </div>
      )}
    </div>
  );
}
