import React, { Component } from 'react';
import './scss/main.scss';
import CustomerDashboard from './components/Customer/CustomerDashboard';
import LoginComponent from './components/Login/LoginComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div class="main-container">
        <div class="header">Aplikacja bankowa</div>
        <Switch>
          <Route path="/" exact component={LoginComponent} />
        </Switch>
        <React.Fragment>
          <CustomerDashboard />
        </React.Fragment>
        </div>
    )
  }
}
export default App;

