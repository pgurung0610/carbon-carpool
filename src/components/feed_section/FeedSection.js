import React from 'react';
import TopNav from './top_nav/TopNav'
import Feed from './feed/Feed'
import Global from './global/Global'

function FeedSection() {
  return (
    <div className="top-nav">
      <TopNav />
      <Global />
    </div>
  );
}

export default FeedSection;