import React from "react";

import "./SideDrawer.css";

const sideDrawer = props => (
  <nav className="side-drawer">
    <ul>
      <li>
        <a href="/"></a>Profile
      </li>
      <li>
        <a href="/#/createEvent">Create Event</a>
      </li>
      <li>
        <a href="/"></a>Search
      </li>
      <li>
        <a href="/"></a>Stats
      </li>
    </ul>
  </nav>
);

export default sideDrawer;
