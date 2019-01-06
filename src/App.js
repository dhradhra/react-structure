import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Header ,Home ,Dashboard } from './components/index';
import reactPolymer from 'react-polymer'
class App extends Component {
  render() {
    return (<Router>
      <div>
        <Route path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <h1>I am a  common heading(in app.js file which is main) appears berfore users get logged in</h1>
      </div>
    </Router>
    );
  }
}

export default App;
