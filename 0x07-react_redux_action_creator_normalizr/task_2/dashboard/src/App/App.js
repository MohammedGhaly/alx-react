import React, { Component } from "react";
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

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: defaultUser,
      logOut: this.logOut.bind(this),
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
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter(
        (item) => item.id !== id
      ),
    });
  }

  logOut() {
    this.setState({ user: defaultUser });
  }

  logIn(email, password) {
    this.setState({ user: { email, password, isLoggedIn: true } });
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }
  handleHideDrawer() {
    this.setState({ displayDrawer: false });
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
    const { isLoggedIn } = user;
    getAllNotificationsByUser("5debd764a7c57c7839d722e9");
    return (
      <appContext.Provider value={value}>
        <Notifications
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          displayDrawer={this.state.displayDrawer}
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
              <Login logIn={this.logIn} />
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

export default App;
