import React from "react";
import { getFooterCopy, getFullYear } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import { appContext } from "../App/AppContext";
import { useContext } from "react";

const styles = StyleSheet.create({
  AppFooter: {
    fontSize: "1rem",
    padding: "1.2rem",
    textAlign: "center",
    fontStyle: "italic",
  },
});

function Footer() {
  const {
    user: { isLoggedIn },
  } = useContext(appContext);
  return (
    <div className={css(styles.AppFooter)}>
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
      {isLoggedIn && (
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

export default Footer;
