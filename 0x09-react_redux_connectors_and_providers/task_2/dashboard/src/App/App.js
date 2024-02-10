import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import { getLatestNotification } from "../utils/utils";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";
import { defaultLogOut, defaultUser } from "./AppContext";
import { appContext } from "./AppContext";
import getAllNotificationsByUser, {
  normalizedData,
} from "../schema/notifications";
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  logout,
} from "../actions/uiActionCreators";

const styles = StyleSheet.create({
  App: {
    height: "100vh",
    maxWidth: "100vw",
    padding: "1.2em",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "1rem",
    padding: "2.4rem",
  },
});

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: defaultUser,
      displayDrawer: false,
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
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter(
        (item) => item.id !== id
      ),
    });
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      alert("Logging you out");
      this.logOut();
    }
  }

  render() {
    const { listNotifications, user, listCourses, logOut } = this.state;
    const value = { user, logOut };
    getAllNotificationsByUser("5debd764a7c57c7839d722e9");
    const {
      isLoggedIn,
      displayDrawer,
      displayNotificationDrawer,
      hideNotificationDrawer,
      login,
      logout,
    } = this.props;
    return (
      <appContext.Provider value={value}>
        <Notifications
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
          displayDrawer={displayDrawer}
          listNotifications={listNotifications}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className={css(styles.App)}>
          <Header />
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title={"Course list"}>
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title={"Log in to continue"}>
              <Login login={login} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title={"News from the School"}>
            <p>some random text</p>
          </BodySection>
          <Footer />
        </div>
      </appContext.Provider>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get("isUserLoggedIn"),
    displayDrawer: state.get("isNotificationDrawerVisible"),
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
