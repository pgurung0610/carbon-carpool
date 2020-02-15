import React from 'react';
import './SideNav.css'
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="side-nav">
        <Link to='/createEvent/'>
            <button >Create Event</button>
        </Link>
    </div>
  );
}

export default SideNav;