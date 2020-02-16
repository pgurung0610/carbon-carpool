import React, { useState, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import firebase from "./firebase";
import "./App.css";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import CreateEvent from "./components/CreateEvent.js";
import Global from "./components/feed_section/global/Global";

function App() {
  // const[events, setEvents] = React.useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const db = firebase.firestore();
  //     const data = await db.collection("event").get();
  //     setEvents(data.docs.map(doc => ({...doc.data(), id: doc.id})));
  //   }

  //   fetchData();
  // }, []);

  // console.log(events);

  return (
    <HashRouter basename="/">
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home/" component={Home} />
          <Route path="/createEvent/" component={CreateEvent} />
          <Route path="/global/" component={Global} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
