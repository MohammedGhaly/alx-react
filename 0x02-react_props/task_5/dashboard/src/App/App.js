import "./App.css";
import { getFullYear } from "../utils/utils";
import { getFooterCopy } from "../utils/utils";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notification from "../Notifications/Notifications";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";

App.defaultProps = {
  isLoggedIn: false,
};

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 4, type: "default", value: "New course available" },
  { id: 5, type: "urgent", value: "New resume available" },
  { id: 6, type: "urgent", html: getLatestNotification() },
];

function App({ isLoggedIn }) {
  return (
    <>
      <Notification listNotifications={listNotifications} />
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
