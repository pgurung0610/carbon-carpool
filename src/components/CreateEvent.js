import React from "react";

function CreateEvent() {
  return (
    <div className="Login">
      Name of Event: &nbsp;
      <input type="text" />
      <text>
        {" "}
        <br />{" "}
      </text>
      Date: &nbsp;
      <input type="text" />
      <text>
        {" "}
        <br />{" "}
      </text>
      Time: &nbsp;
      <input type="text" />
      <text>
        {" "}
        <br />{" "}
      </text>
      Location: &nbsp;
      <input type="text" />
      <text>
        {" "}
        <br />{" "}
      </text>
      <button>Create</button>{" "}
    </div>
  );
}

export default CreateEvent;
