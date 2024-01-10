import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notification from "../Notifications/Notifications";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPressed = this.handleKeyPressed.bind(this);
  }

  handleKeyPress(e) {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  listNotifications = [
    { id: 4, type: "default", value: "New course available" },
    { id: 5, type: "urgent", value: "New resume available" },
    { id: 6, type: "urgent", html: getLatestNotification() },
  ];

  render() {
    return (
      <>
        <Notification listNotifications={this.listNotifications} />
        <div className="App">
          <Header />
          <div className="App-body">
            {this.props.isLoggedIn ? (
              <CourseList listCourses={this.listCourses} />
            ) : (
              <Login />
            )}
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  },
};
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
