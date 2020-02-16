import React from "react";
import TopNav from "./top_nav/TopNav";
import Feed from "./feed/Feed";
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import "./FeedSection.css";
import { Link } from "react-router-dom";

class FeedSection extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        <main style={{ marginTop: "64px" }}>
          {/* <p>This is the page content!</p> */}
        </main>
        <ul id="topNavBar">
          <li className="topNavBarOption">
            <Link to="/global">
              <button id="global">Global Feed</button>
            </Link>
          </li>
          <li className="topNavBarOption">
            <button id="feed">Feed</button>
          </li>
          <li className="topNavBarOption">
            <button id="personal">Personal Events</button>
          </li>
        </ul>
        <Feed />
      </div>
    );
  }
}
export default FeedSection;
