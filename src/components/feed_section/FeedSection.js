import React from 'react';
import TopNav from './top_nav/TopNav'
import Feed from './feed/Feed'

function FeedSection() {
  return (
    <div className="top-nav">
      <TopNav />
      <Feed />
    </div>
  );
}

export default FeedSection;