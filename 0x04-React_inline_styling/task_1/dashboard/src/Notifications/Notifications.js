import React from "react";
import { Component } from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#66666622",
    border: "0px",
    borderRadius: "50%",
    color: "#3a3a3a",
    fontWeight: "bold",
    background: "none",
    fontSize: "15px",
    position: "absolute",
    right: "3px",
    top: "3px",
    cursor: "pointer",
    outline: "none",
  },
  Notifications: {
    border: "2px dotted #ff0000",
    padding: "0 20px",
    right: "10px",
    width: "35%",
    position: "absolute",
    marginBottom: "20px",
    height: "auto",
  },
  menuItem: {
    position: "relative",
    right: "10px",
    textAlign: "right",
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      nextProps.listNotifications.length >
        this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {displayDrawer ? (
          <div className={css(styles.Notifications)}>
            <button
              className={css(styles.button)}
              aria-label="Close"
              onClick={(e) => {
                console.log("Close button has been clicked");
              }}
            >
              <img src={closeIcon} alt="close icon" />
            </button>
            {listNotifications.length !== 0 ? (
              <p>Here is the list of notifications</p>
            ) : null}

            <ul>
              {listNotifications.length === 0 ? (
                <NotificationItem
                  markAsRead={this.markAsRead}
                  type="default"
                  value="No new notification for now"
                />
              ) : null}
              {listNotifications.map((val, _) => {
                return (
                  <NotificationItem
                    id={val.id}
                    markAsRead={this.markAsRead}
                    type={val.type}
                    value={val.value}
                    html={val.html}
                    key={val.id}
                  />
                );
              })}
            </ul>
          </div>
        ) : null}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propType = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
