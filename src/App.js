import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom"
import './App.css';
import Login from './components/Login.js'
import Home from './components/Home.js'
import CreateEvent from './components/CreateEvent.js'

function App() {
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
