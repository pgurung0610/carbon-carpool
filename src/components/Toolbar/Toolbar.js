import React from "react";
import "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/"></a>Carbon Carpool
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        {/* <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Useres</a>
          </li>
        </ul> */}
      </div>
    </nav>
  </header>
);

export default toolbar;
