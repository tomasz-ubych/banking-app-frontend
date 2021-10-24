import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
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
        if (search.searchParameter === "ID") {
            axios.get(`${process.env.REACT_APP_API_URL}/customer/${search.searchId}`)
                .then(response => this.setState({
                    customers: [].concat(response.data)
                }))
        }
        else {
            axios.get(`${process.env.REACT_APP_API_URL}/customer?pesel=${search.searchId}`)
                .then(response => this.setState({
                    customers: response.data
                }))
        }
    }

    render() {
        return (
            <div className="App">
                <Header as='h2' dividing>Po czym chcesz wyszukać klienta?</Header>
                <React.Fragment>
                    <CustomerSearch 
                     getCustomer={this.getCustomer}
                    />
                    <CustomerList 
                    customers={this.state.customers}
                    />
                </React.Fragment>
            </div>
        );
    }

}

