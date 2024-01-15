import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  defaultNotification: {
    '[data-notification-type="default"]': {
      color: "blue",
    },
  },
  urgentNotification: {
    '[data-notification-type="urgent"]': {
      color: "red",
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
        ? `${css(styles.urgentNotification)}`
        : `${css(styles.defaultNotification)}`;
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
