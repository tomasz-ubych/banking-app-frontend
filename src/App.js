import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import axios from 'axios';
import { Button, Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}  from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.getCustomerAddress = this.getCustomerAddress.bind(this);
    this.getCustomer = this.getCustomer.bind(this);
    this.onInputchange = this.onInputchange.bind(this);

    this.state = {
      customers: [],
      addresses: [],
      tempCustomer: '',
      id: '',
      searchParameter: 'ID',
      clicked_id: ''
    };
  }
  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  getCustomerAddress(event) {
    const id = event.currentTarget.getAttribute("data-rowid");
    console.log(id);
    axios.get(`${process.env.REACT_APP_API_URL}/customer/${id}/address/`)
      .then(response => this.setState({
        addresses: response.data.content
      }))
    console.log(this.state.addresses)
  };

  getCustomer() {
    if (this.state.searchParameter === "ID") {
      this.setState({
        customers: []
      })
      axios.get(`${process.env.REACT_APP_API_URL}/customers/id/${this.state.id}`)
        .then(response => this.setState({
          customers: [...this.state.customers, response.data]
        }))
    }
    else {
      axios.get(`${process.env.REACT_APP_API_URL}/customers/pesel/${this.state.id}`)
        .then(response => this.setState({
          customers: response.data
        }))
    }
  }


  render() {
    const self = this;
    if (this.state.customers[0] !== null) {
      var tableData = this.state.customers.map(function (customer) {
        return <tr key={customer.id} >
          <td>{customer.firstName}</td>
          <td>{customer.lastName}</td>
          <td>{customer.pesel}</td>
          <td><button onClick={self.getCustomerAddress} data-rowid={customer.id}> Pobierz adres klienta </button></td>
          <td>
            <Link to={'/home'} >
              <button onClick={self.getCustomerAddress} data-rowid={customer.id}> Pobierz adres klienta - router </button>
            </Link>
          </td>
        </tr>
      });
    }
    let table = <table><thead></thead></table>;
    if (this.state.customers[0] !== null && this.state.customers[0] !== undefined) {
      table =
        <table>
          <thead>
            <div>Clicked ID: {this.state.clicked_id}</div>
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
<Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/home'} className="nav-link">Home</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/home' component={Home} />
          </Switch>
        </div>
      </Router>

export default App;
 