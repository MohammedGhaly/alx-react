import "./Header.css";
import logo from "../assets/Holberton_Logo.jpg";

export default function Header() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
}
