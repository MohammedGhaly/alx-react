import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  defaultNotification: {
    color: "blue",
  },
  urgentNotification: {
    color: "red",
  },
  notificationItem: {
    "@media (max-width: 900)": {
      width: "100%",
      borderBottom: "1px solid #000000 ",
      marginBottom: "10px",
      listStyleType: "none",
      padding: "10px 20px",
    },
  },
});

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, value, html, markAsRead, id } = this.props;
    const className =
      type === "urgent"
        ? `${css(styles.urgentNotification)} ${css(styles.notificationItem)}`
        : `${css(styles.defaultNotification)} ${css(styles.notificationItem)}`;
    return value ? (
      <li
        onClick={() => markAsRead(id)}
        data-notification-type={type}
        className={className}
      >
        {value}
      </li>
    ) : (
      <li
        onClick={() => markAsRead(id)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        className={className}
      ></li>
    );
  }
}

NotificationItem.defaultProps = {
  type: "default",
  id: 0,
  markAsRead: () => {
    console.log("empty");
  },
};

NotificationItem.propTypes = {
  markAsRead: PropTypes.func,
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  id: PropTypes.number,
};

export default NotificationItem;
