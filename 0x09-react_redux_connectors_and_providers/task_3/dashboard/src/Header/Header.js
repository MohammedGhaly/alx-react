import React, { useContext } from "react";
import logo from "../assets/holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/uiActionCreators";

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

export function Header({ user, logout }) {
  return (
    <>
      <div className={css(styles.AppHeader)}>
        <img src={logo} alt="logo" className={css(styles.AppHeaderImg)} />
        <h1 className={css(styles.title)}>School dashboard</h1>
      </div>
      {user && (
        <section className={css(styles.AppHeader)} id="logoutSection">
          <h1>
            Welcome {user.email}{" "}
            <a style={{ color: "purple", cursor: "pointer" }} onClick={logout}>
              logout
            </a>
          </h1>
        </section>
      )}
    </>
  );
}

Header.defaultProps = {
  user: null,
  logout: () => {},
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { user: state.get("user") };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
