import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import SearchCustomer from './components/SearchCustomer'
import CustomerDetails from './components/CustomerDetails'

import axios from 'axios';
import { Button, Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Aplikacja bankowa</h1>
        <h1>Po czym chcesz wyszukać klienta?</h1>

        <React.Fragment>
          <SearchCustomer />
          <CustomerDetails />
        </React.Fragment>
      </div>
    )
  }
}
export default App;

