import React from "react";
import { getFooterCopy, getFullYear } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  AppFooter: {
    fontSize: "1rem",
    padding: "1.2rem",
    textAlign: "center",
    fontStyle: "italic",
  },
});

export function Footer({ user }) {
  return (
    <div className={css(styles.AppFooter)}>
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
      {user && (
        <p>
          <a
            className="contact-us-link"
            style={{ cursor: "pointer", color: "purple" }}
          >
            Contact us
          </a>
        </p>
      )}
    </div>
  );
}

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

export default connect(mapStateToProps, null)(Footer);
