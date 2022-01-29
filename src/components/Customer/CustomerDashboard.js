import React, { Component } from 'react';
import CustomerSearch from './CustomerSearch';
import CustomerList from './CustomerList';
import axios from 'axios';

export default class CustomerDashboard extends Component {
    constructor(props) {
        super(props)
        this.getCustomer = this.getCustomer.bind(this);
        this.state = {
            customers: []
        };
    }

    getCustomer = (search) =>  {
        this.setState({
            customers: []
        })
        if (search.searchParameter === "ID") {
            axios.get(`${process.env.REACT_APP_API_URL}/customer/${search.searchId}`)
                .then(response => this.setState({
                    customers: [].concat(response.data)
                }))
        }
        else if (search.searchParameter === "PESEL") {
            axios.get(`${process.env.REACT_APP_API_URL}/customer?pesel=${search.searchId}`)
                .then(response => this.setState({
                    customers: response.data
                }))
        }
        else{
            axios.get(`${process.env.REACT_APP_API_URL}/customer?firstName=${search.searchFirstName}&lastName=${search.searchLastName}`)
                .then(response => this.setState({
                    customers: response.data
                }))
        }
    }
    clearNotChosenCustomers = (customerId) => {
        var customers = this.state.customers;
        var filteredCustomers = customers.filter(function(customer){
            return customer.id == customerId
        })
        this.setState({
            customers: filteredCustomers
        })
    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <CustomerSearch 
                     getCustomer={this.getCustomer}
                    />
                    <CustomerList 
                    customers={this.state.customers}
                    clearNotChosenCustomers={this.clearNotChosenCustomers}
                    />
                </React.Fragment>
            </div>
        );
    }
}

