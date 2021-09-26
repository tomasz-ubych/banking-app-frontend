import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Header, Grid } from 'semantic-ui-react'
import CustomerDashboard from './components/CustomerDashboard';


class App extends Component {

  render() {
    return (
      <div
        style={{
          position: 'absolute', left: '50%',
          transform: 'translate(-50%)'
        }}>
        <Header as='h1'>Aplikacja bankowa</Header>
        <React.Fragment>
          <CustomerDashboard />
        </React.Fragment>
      </div>
    )
  }
}
export default App;

