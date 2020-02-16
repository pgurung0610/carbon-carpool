import React from "react";
import TopNav from "./top_nav/TopNav";
import Feed from "./feed/Feed";
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import "./FeedSection.css";

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
            <button id="global">Global Feed</button>
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
