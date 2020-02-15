import React from 'react';
import './TopNav.css'

function TopNav() {
  return (
    <section className="TopNav">
      <ul>
        <li>
          <button id='global'>
            Global Feed
          </button>
        </li>
        <li>
          <button id='feed'>
            Feed
          </button>
        </li>
        <li>
          <button id='personal'>
            Personal Transactions
          </button>
        </li>
      </ul>
    </section>
  );
}

export default TopNav;