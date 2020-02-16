import React from "react";
import { Link } from "react-router-dom";

function Exit() {
  return (
    <Link to="/home">
      <button>Exit</button>
    </Link>
  );
}

export default Exit;
