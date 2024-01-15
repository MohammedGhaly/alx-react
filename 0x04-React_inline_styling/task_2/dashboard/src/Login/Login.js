import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  AppBody: {
    fontSize: "1rem",
    padding: "2.4rem",
    borderBottom: "4px solid #e0354b",
    height: "40%",
  },
  AppBodyInput: {
    margin: "0 16px 0 8px",
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
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            className={css(styles.AppBodyInput)}
          />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" />
          <button>OK</button>
        </div>
      </>
    );
  }
}

export default Login;
