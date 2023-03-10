import "../App.css";
import logo from "../assets/logoipsum-287.svg";
function Header() {
  return (
    <header className="header-content">
      <img src={logo} alt="logo" className="" />
      <ul className="header-inner-content">
        <li>link</li>
        <li>link</li>
        <li>link</li>
      </ul>
    </header>
  );
}

export default Header;
