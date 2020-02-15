import React from "react";
import "./App.css";
import Login from "./components/Login.js";
import CreateEvent from "./components/CreateEvent.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreateEvent />
      </header>
    </div>
  );
}

export default App;
