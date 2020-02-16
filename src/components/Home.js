import React from "react";
import "./Home.css";
import SideNav from "./side_nav/SideNav";
import FeedSection from "./feed_section/FeedSection";

function Home() {
  return (
    <div className="Home">
      <div></div>
      <div className="sideNav">
        <SideNav />
      </div>
      <div className="feedSection">
        <FeedSection />
      </div>
    </div>
  );
}

export default Home;
