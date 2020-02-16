import React from "react";

import "./SideDrawer.css";

const sideDrawer = props => (
  <nav className="side-drawer">
    <ul>
      <li>
        <a href="/">Products</a>
      </li>
      <li>
        <a href="/">Users</a>
      </li>
    </ul>
  </nav>
);

export default sideDrawer;
