import React from "react";
import {Link, IndexLink} from "react-router";

var Navigation = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active-link">CountDown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created By <a href="https://github.com/hailincai">Hailin Cai</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
