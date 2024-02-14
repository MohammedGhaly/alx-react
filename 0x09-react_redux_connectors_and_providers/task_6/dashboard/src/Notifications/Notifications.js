import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import { Map } from "immutable";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import {
  fetchNotifications,
  markAsAread,
} from "../actions/notificationActionCreators";
import { getUnreadNotifications } from "../selectors/notificationSelector";

// import keyframes from "aphrodite";

const animateOpacity = {
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0.5,
  },
};
const bounce = {
  "0%": {
    transform: "translateY(0px)",
  },
  "25%": {
    transform: "translateY(5px)",
  },
  "50%": {
    transform: "translateY(0px)",
  },
  "75%": {
    transform: "translateY(-5px)",
  },
  "100%": {
    transform: "translateY(0px)",
  },
};

const styles = StyleSheet.create({
  button: {
    color: "#3a3a3a",
    fontWeight: "bold",
    background: "none",
    border: "none",
    fontSize: "15px",
    position: "absolute",
    right: "3px",
    top: "3px",
    cursor: "pointer",
    outline: "none",
  },
  Notifications: {
    padding: "1em",
    border: "2px dashed red",
    position: "absolute",
    top: "2.2em",
    right: "0",
    background: "#ffffff",
    paddingLeft: "5%",

    "@media (max-width: 375px)": {
      display: "block",
      height: "100%",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      border: "none",
      fontSize: "20px",
      padding: "0",
    },
  },
  menuItem: {
    position: "fixed",
    right: "10px",
    backgroundColor: "#fff8f8",
    display: "inline-block",
    textAlign: "right",
    fontSize: "18px",
    fontWeight: 700,
    ":hover": {
      animationName: [animateOpacity, bounce],
      animationDuration: "1s, 0.5s",
      cursor: "pointer",
      animationIterationCount: 3,
    },
  },
});

export class Notifications extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;
    // console.log(listNotifications["0f446b01-37c3-4884-9dc6-316f23b7711b"]);
    return (
      <>
        {displayDrawer ? (
          <div className={css(styles.Notifications)}>
            <button
              className={css(styles.button)}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              <img src={closeIcon} alt="close icon" />
            </button>
            {listNotifications.length !== 0 ? (
              <p>Here is the list of notifications</p>
            ) : null}

            <ul style={{ paddingLeft: "0px" }}>
              {listNotifications.length === 0 ? (
                <NotificationItem
                  markAsRead={markNotificationAsRead}
                  type="default"
                  value="No new notification for now"
                />
              ) : null}

              {listNotifications &&
                listNotifications.valueSeq().map((notification) => {
                  let html = notification.get("html");

                  if (html) html = html.toJS();

                  return (
                    <NotificationItem
                      key={notification.get("guid")}
                      id={notification.get("guid")}
                      type={notification.get("type")}
                      value={notification.get("value")}
                      html={html}
                      markAsRead={markNotificationAsRead}
                    />
                  );
                })}
            </ul>
          </div>
        ) : (
          <div className={css(styles.menuItem)}>
            <p onClick={handleDisplayDrawer}>Your notifications</p>
          </div>
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: Map([]),
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  fetchNotifications: () => {},
};

Notifications.propType = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.object,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
  markNotificationAsRead: PropTypes.func,
};

const mapStateToProps = (state) => {
  const unreadNotifications = getUnreadNotifications(state);

  return {
    listNotifications: unreadNotifications,
  };
};

const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsRead: markAsAread,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
