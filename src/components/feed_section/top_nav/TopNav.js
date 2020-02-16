import React from 'react';
import './TopNav.css'

function TopNav() {
  return (
    <section className="TopNav">
      <ul id="topNavBar">
        <li className="topNavBarOption">
          <button id='global'>
            Global Feed
          </button>
        </li>
        <li className="topNavBarOption">
          <button id='feed'>
            Feed
          </button>
        </li>
        <li className="topNavBarOption">
          <button id='personal'>
            Personal Transactions
          </button>
        </li>
      </ul>
    </section>
  );
}

export default TopNav;