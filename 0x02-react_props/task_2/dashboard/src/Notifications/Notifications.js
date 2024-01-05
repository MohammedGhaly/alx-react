import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

const Notification = () => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem value={"New course available"} type={"default"} />
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
  );
};

export default Notification;
