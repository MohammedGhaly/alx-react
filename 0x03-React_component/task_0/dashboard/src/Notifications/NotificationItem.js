import PropTypes from "prop-types";

NotificationItem.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: "default",
};

export default function NotificationItem({ type, html, value }) {
  return (
    <>
      {type && value ? (
        <li data-notification-type={type || "default"}>{value}</li>
      ) : null}
      {!(type && value) && html ? (
        <li
          data-notification-type={type || "default"}
          dangerouslySetInnerHTML={{ __html: html }}
        ></li>
      ) : null}
    </>
  );
}
