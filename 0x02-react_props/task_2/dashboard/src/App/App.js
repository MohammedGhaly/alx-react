import "./App.css";
import { getFullYear } from "../utils/utils";
import { getFooterCopy } from "../utils/utils";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notification from "../Notifications/Notifications";

function App() {
  return (
    <>
      <Notification />
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
