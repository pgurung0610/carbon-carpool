import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom"
// import firebase from './firebase'
import './App.css';
import Login from './components/Login.js'
import Home from './components/Home.js'
import CreateEvent from './components/CreateEvent.js'

function App() {
  // const[events, setEvents] = React.useState([]);

  //       React.useEffect(() => {
  //           const fetchData = async () => {
  //               const db = firebase.firestore();
  //               const data = await db.collection("users").get();
  //               setEvents(data.docs.map(doc => doc.data()));
  //           }  
        
  //           fetchData();
  //       }, []); 

  //       console.log(events);

  return (
    <HashRouter basename='/'>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/home/" component={Home} />
          <Route path="/createEvent/" component={CreateEvent} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
