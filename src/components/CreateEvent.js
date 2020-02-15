import React from "react";
import './CreateEvent.css';

function CreateEvent() {
  return (
    <div className="CreateEvent">
      Name of Event: &nbsp;
      <input type="text" />
        <br />
      Date: &nbsp;
      <input type="text" />
        <br />
      Time: &nbsp;
      <input type="text" />
        <br />
      Location: &nbsp;
      <input type="text" />
        <br />
      <button>Create</button>{" "}
    </div>
  );
}

export default CreateEvent;
