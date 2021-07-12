import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props)
    
    this.state = {
      customers: [],
    };
  }
  getCustomers(){
    axios('http://localhost:8088/customer')
    .then(response => this.setState({
      customers : response.data._embedded.customer
    }));
  }

  getCustomerById(id){
    axios('http://localhost:8088/customer/{id}')
    .then(response => this.setState({
      customer : response
    }));
  }

  componentWillMount(){
   this.getCustomers();
  }

  render(){
    return <div className="App">
        <input type="radio" value="Pesel" name="searchParameter" /> PESEL
        <input type="radio" value="Id" name="searchParameter"/> Id
        
      <table>
        <tr>
          <th>First name</th>
          <th>Last name</th>
        </tr>
        {this.state.customers.map(customer => 
    <div><td>{customer.firstName}</td> <td>{customer.lastName}</td>
    </div>)}
    </table>
    </div>;
  }
}


export default App;
