import React from "react";
import { getFooterCopy, getFullYear } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  AppFooter: {
    fontSize: "1rem",
    padding: "1.2rem",
    textAlign: "center",
    fontStyle: "italic",
  },
});

function Footer() {
  return (
    <div className={css(styles.AppFooter)}>
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </div>
  );
}

export default Footer;
