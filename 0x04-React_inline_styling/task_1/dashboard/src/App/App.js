import React, { Component } from "react";
import Header from "../Header/Header";
import PropTypes from "prop-types";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import { getLatestNotification } from "../utils/utils";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  App: {
    height: "100vh",
    maxWidth: "100vw",
    padding: "1.2em",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "1rem",
    padding: "2.4rem",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    textAlign: "center",
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: props.isLoggedIn,
      listCourses: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ],
      listNotifications: [
        { id: 1, value: "New course available", type: "default" },
        { id: 2, value: "New resume available", type: "urgent" },
        { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
      ],
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.logOut = props.logOut;
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    event.preventDefault();
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.logOut();
    }
  }

  render() {
    const { listNotifications, isLoggedIn, listCourses } = this.state;
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className={css(styles.App)}>
          <Header />
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title={"Course list"}>
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title={"Log in to continue"}>
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title={"News from the School"}>
            <p>some random text</p>
          </BodySection>
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  },
};

export default App;
