import React from "react";
import logo from "../assets/logoipsum-287.svg";

export default function Footer() {
  return (
    <footer className="footer-content">
      <ul className="footer-inner-content">
        <li>contact us</li>
        <li>some other info</li>
        <li>
          {" "}
          <img
            src={logo}
            alt="logo"
            width="100px"
            height="175px"
            className=""
          />
        </li>
      </ul>
    </footer>
  );
}
