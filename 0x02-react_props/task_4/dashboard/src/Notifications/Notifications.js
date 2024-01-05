import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

Notification.prototypes = {
  displayDrawer: PropTypes.bool,
};

Notification.defaultProps = {
  displayDrawer: false,
};

export default function Notification({ displayDrawer }) {
  console.log(displayDrawer);
  return (
    <div className="notifications-container">
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem value={"New course available"} />
            <NotificationItem value={"New resume available"} type={"urgent"} />
            <NotificationItem type={"urgent"} html={getLatestNotification()} />
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
