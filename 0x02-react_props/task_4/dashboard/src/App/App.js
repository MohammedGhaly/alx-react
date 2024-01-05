import "./App.css";
import { getFullYear } from "../utils/utils";
import { getFooterCopy } from "../utils/utils";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notification from "../Notifications/Notifications";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";

App.defaultProps = {
  isLoggedIn: false,
};

function App({ isLoggedIn }) {
  return (
    <>
      <Notification />
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
