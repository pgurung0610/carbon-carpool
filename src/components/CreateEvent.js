import React, { useState, useEffect } from "react";
import firebase from '../firebase';
import { Link, Redirect } from "react-router-dom";
import './CreateEvent.css';

function CreateEvent() {
  const[events, setEvents] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("event").get();
      setEvents(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    }
        
    fetchData();
  }, []); 

  console.log(events);

  let createAnEvent = (e) => {
    e.preventDefault();
    const db = firebase.firestore();

    // Need to check for valid input in the future
    db.collection('event').add({
      name: document.getElementById("name").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      location: document.getElementById("location").value
    }).then(() => {
      console.log("Successfully created new event!");
      document.getElementById("success").style.visibility = 'visible';
    }).catch((e) => {
      console.log(e);
      alert("Failed to create new event");
    });
  }

  return (
    <div>
      <div>
        <form className="CreateEvent" onSubmit={createAnEvent.bind(this)}>
          <div id="success">
            <div id="successMessage">Successfully Created Event!</div>
            <div>
              <Link to="/home/">
                <button>Return to Feed</button>
              </Link>
            </div>
          </div>
      
          <div className="eventField">
            Name of Event:
            <input id="name" type="text" placeholder="Name of event"/>
            <br />
          </div>
          <div className="eventField">
            Date:
            <input id="date" type="text" placeholder="mm/dd/yyyy"/>
            <br />
          </div>
          <div className="eventField">
            Time:
            <input id="time" type="text" placeholder="hh:mm"/>
            <br />
          </div>
          <div className="eventField">
            Location:
            <input id="location" type="text" placeholder="Location"/>
            <br />
          </div>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
