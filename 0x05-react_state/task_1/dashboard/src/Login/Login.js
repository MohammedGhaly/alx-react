import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";
import { useEffect } from "react";

const styles = StyleSheet.create({
  loginInputDiv: {
    marginBottom: "10px",
    display: "inline-block",
    "@media (max-width: 900px)": {
      display: "block",
    },
  },
  submitButton: {
    maxWidth: "auto",
  },
  AppBody: {
    fontSize: "1rem",
    padding: "1rem",
    borderBottom: "4px solid #e0354b",
    height: "40%",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  AppBodyInput: {
    margin: "0 16px 0 8px",
    "@media (max-width: 900px)": {
      float: "right",
      width: "50%",
    },
  },
});

function Login(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  function handleLoginSubmit(e) {
    e.preventDefault();
    setIsLoggedIn(true);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  useEffect(
    function () {
      if (!email || !password) {
        setEnableSubmit(false);
      } else {
        setEnableSubmit(true);
      }
    },
    [email, password]
  );

  return (
    <div className={css(styles.AppBody)}>
      <p>Login to access the full dashboard</p>
      <form action="" onSubmit={handleLoginSubmit}>
        <div className={css(styles.loginInputDiv)}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            className={css(styles.AppBodyInput)}
            onChange={handleChangeEmail}
            value={email}
          />
        </div>
        <div className={css(styles.loginInputDiv)}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChangePassword}
            value={password}
            className={css(styles.AppBodyInput)}
          />
        </div>
        <input
          type="submit"
          className={css(styles.submitButton)}
          disabled={!enableSubmit}
        />
      </form>
    </div>
  );
}

export default Login;
