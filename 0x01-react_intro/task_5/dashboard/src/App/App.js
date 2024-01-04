import logo from "../assets/Holberton_Logo.jpg";
import "./App.css";
import { getFullYear } from "../utils/utils";
import { getFooterCopy } from "../utils/utils";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>School dashboard</p>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">email: </label>
        <input type="email" id="email" />
        <label htmlFor="password">password: </label>
        <input type="password" id="password" />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;
