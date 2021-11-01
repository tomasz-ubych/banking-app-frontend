import React, { Component } from 'react';
import './scss/main.scss';
import CustomerDashboard from './components/Customer/CustomerDashboard';


class App extends Component {

  render() {
    return (
      <div class="main-container">
        <div class="header">Aplikacja bankowa</div>
        <React.Fragment>
          <CustomerDashboard />
        </React.Fragment>
        </div>
    )
  }
}
export default App;

