import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  loginInputDiv: {
    marginBottom: "10px",
    display: "inline-block",
    "@media (max-width: 900px)": {
      display: "block",
    },
  },
  button: {
    maxWidth: "45px",
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

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={css(styles.AppBody)}>
          <p>Login to access the full dashboard</p>
          <div className={css(styles.loginInputDiv)}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              className={css(styles.AppBodyInput)}
            />
          </div>
          <div className={css(styles.loginInputDiv)}>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              className={css(styles.AppBodyInput)}
            />
          </div>
          <button className={css(styles.button)}>OK</button>
        </div>
      </>
    );
  }
}

export default Login;
