import React from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return value ? (
      <li onClick={() => markAsRead(id)} data-notification-type={type}>
        {value}
      </li>
    ) : (
      <li
        onClick={() => markAsRead(id)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
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
