import React from "react";
import "./header.scss";
const Header = () => {
  return (
    <header>
      <h1>DECODE LAB</h1>

      <ul>
        <li>
          <a href="#">
            <i className="fab fa-twitter-square"></i>
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-envelope"></i>
            <span>E-mail</span>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
