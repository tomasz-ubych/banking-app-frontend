import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button, Navbar } from 'react-bootstrap';
import { NavLink, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.getCustomer = this.getCustomer.bind(this);
    this.onInputchange = this.onInputchange.bind(this);

    this.state = {
      customers: [],
      tempCustomer: '',
      id: '',
      searchParameter: 'ID',
      iterator: 0,
    };
  }
  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  getCustomer() {
    if (this.state.searchParameter === "ID") {
      this.setState({
          customers: []
        })
      axios.get(`http://localhost:8088/customers/id/${this.state.id}`)
        .then(response => this.setState({
          customers: [...this.state.customers, response.data]
        }))      
    }
    else {
      axios.get(`http://localhost:8088/customers/pesel/${this.state.id}`)
        .then(response => this.setState({
          customers: response.data
        }))
        
    }
  }

  render() {
    if (this.state.customers[0] !== null) {
      var tableData = this.state.customers.map(function (customer) {
        return <tr><td>{customer.firstName}</td><td>{customer.lastName}</td><td>{customer.pesel}</td></tr>
      });
    }
    let table = <table><thead></thead></table>;
    if (this.state.customers[0] !== null && this.state.customers[0] !== undefined) {
      table =
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>PESEL</th>
              <th>See details</th>
            </tr>
          </thead>
          <tbody>
            {tableData}
          </tbody>
        </table>
    }
    return <div className="App">
      <h1>Aplikacja bankowa</h1>
      <div>
        <h1>Po czym chcesz wyszukać klienta?</h1>
        <div onChange={this.onInputchange}>
          <span class="answerBottomYesNo" ><input type="radio" name="searchParameter" value="ID" defaultChecked /> Id</span>
          <span class="answerBottomYesNo" > <input type="radio" name="searchParameter" value="PESEL" /> Pesel</span>
        </div>
        <div>
          <input name="id"
            type="text"
            value={this.state.id}
            onChange={this.onInputchange} />
        </div>
        <button onClick={this.getCustomer}> Pobierz dane klienta </button>
      </div>
      {table}
    </div>;
  }
}



export default App;
