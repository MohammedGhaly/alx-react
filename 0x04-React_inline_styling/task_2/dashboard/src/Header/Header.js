import React from "react";
import logo from "../assets/holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  AppHeader: {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    padding: "1.2rem",
    borderBottom: "4px solid #e0354b",
    marginBottom: "10px",
  },
  AppHeaderImg: {
    width: "200px",
    height: "200px",
  },
});

function Header() {
  return (
    <div className={css(styles.AppHeader)}>
      <img src={logo} alt="logo" className={css(styles.AppHeaderImg)} />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
