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
    this.getCustomerById = this.getCustomerById.bind(this);
    this.onInputchange = this.onInputchange.bind(this);

    this.state = {
      customers: [],
      id: '',
      searchParameter: '',
    };
  }
  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  getCustomerById() {
    this.setState({ customers: [] });
    if (this.state.searchParameter == "ID") {
      axios.get(`http://localhost:8088/customer/${this.state.id}`)
        .then(response => this.setState({
          customers: response.data
        }))
    }
    else {
      axios.get(`http://localhost:8088/customer/search/findByPesel?pesel=${this.state.id}`)
        .then(response => this.setState({
          customers: response.data
        }))
    }
  }


  render() {
    return <div className="App">
      <h1>Aplikacja bankowa</h1>
      <div>
        <h1>Po czym chcesz wyszukać klienta?</h1>
        <div onChange={this.onInputchange}>
          <input type="radio" name="searchParameter" value="PESEL" /> Pesel
          <input type="radio" name="searchParameter" value="ID" /> Id
        </div>
        <div>
          <input name="id"
            type="text"
            value={this.state.id}
            onChange={this.onInputchange} />
        </div>
        <button onClick={this.getCustomerById}> Pobierz dane klienta </button>
      </div>

      <table>
        <tr>
          <th>First name</th>
          <th>Last name</th>
        </tr><td>{this.state.customers.firstName}</td>
        <td>{this.state.customers.lastName}</td>
      </table>
    </div>;
  }
}

const Navigation = () => (
  <nav>
    <ul>
      {/*<li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li> */}
      {/* <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li> */}
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
  </Switch>
);



const About = () => (
  <div className='about'>
    <h1>About Me</h1>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  </div>
);

const Contact = () => (
  <div className='contact'>
    <h1>Contact Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);


export default App;
