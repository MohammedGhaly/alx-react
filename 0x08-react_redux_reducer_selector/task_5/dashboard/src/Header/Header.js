import React, { useContext } from "react";
import logo from "../assets/holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { appContext } from "../App/AppContext";

const styles = StyleSheet.create({
  AppHeader: {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    padding: "1.2rem",
    borderBottom: "4px solid #e0354b",
    marginBottom: "10px",
    marginRight: "10px",
    flex: 1,
    alignSelf: "center",
  },
  AppHeaderImg: {
    width: "200px",
    height: "200px",
    "@media (max-width: 900px)": {
      width: "50%",
      height: "50%",
    },
  },
  title: {
    "@media (max-width: 900px)": {
      textAlign: "center",
      fontSize: "1.7rem",
    },
  },
});

function Header() {
  const { user, logOut } = useContext(appContext);
  const { isLoggedIn, email } = user;

  return (
    <>
      <div className={css(styles.AppHeader)}>
        <img src={logo} alt="logo" className={css(styles.AppHeaderImg)} />
        <h1 className={css(styles.title)}>School dashboard</h1>
      </div>
      {isLoggedIn && (
        <section className={css(styles.AppHeader)} id="logoutSection">
          <h1>
            Welcome {email}{" "}
            <a style={{ color: "purple", cursor: "pointer" }} onClick={logOut}>
              logout
            </a>
          </h1>
        </section>
      )}
    </>
  );
}

export default Header;
