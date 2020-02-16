import React, { useState, useEffect } from "react";
import firebase from '../firebase';
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

  let createAnEvent = function(e) {
    const db = firebase.firestore();

    // Need to check for valid input in the future
    db.collection('event').add({
      name: document.getElementById("name").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      location: document.getElementById("location").value
    }).then(() => {
      console.log("Successfully created new event!");
    }).catch((e) => {
      console.log(e);
      alert("Failed to create new event");
    });
  }

  return (
    <form className="CreateEvent" onSubmit={createAnEvent}>
      Name of Event:
      <input id="name" type="text" placeholder="Name of event"/>
        <br />
      Date:
      <input id="date" type="text" placeholder="mm/dd/yyyy"/>
        <br />
      Time:
      <input id="time" type="text" placeholder="hh:mm"/>
        <br />
      Location:
      <input id="location" type="text" placeholder="Location"/>
        <br />
      <button>Create</button>
    </form>
  );
}

export default CreateEvent;
