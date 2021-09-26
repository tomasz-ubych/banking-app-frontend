import React, { Component } from 'react';
import { Header, Grid } from 'semantic-ui-react'
import CustomerSearch from './CustomerSearch';
import CustomerList from './CustomerList';
import axios from 'axios';

export default class CustomerDashboard extends Component {
    constructor(props) {
        super(props)
        this.getCustomerAccounts = this.getCustomerAccounts.bind(this);
        this.getCustomerAddress = this.getCustomerAddress.bind(this);
        this.getCustomer = this.getCustomer.bind(this);
        this.state = {
            customers: [],
            addresses: [],
            accounts: []
        };
    }

    getCustomer = (search) =>  {
        this.setState({
            accounts: [],
            addresses: []
        })
        if (search.searchParameter === "ID") {
            axios.get(`${process.env.REACT_APP_API_URL}/customers/id/${search.searchId}`)
                .then(response => this.setState({
                    customers: [].concat(response.data)
                }))
        }
        else {
            axios.get(`${process.env.REACT_APP_API_URL}/customers/pesel/${search.searchId}`)
                .then(response => this.setState({
                    customers: response.data
                }))
        }
    }

    getCustomerAddress(clickedId) {
        axios.get(`${process.env.REACT_APP_API_URL}/customer/${clickedId}/address/`)
            .then(response => this.setState({
                addresses: response.data.content
            }))
        console.log(this.state.addresses)
    };

    getCustomerAccounts(clickedId) {
        axios.get(`${process.env.REACT_APP_API_URL}/customer/${clickedId.clickedId}/accounts/`)
            .then(response => this.setState({
                accounts: response.data.content
            }))
        console.log(this.state.accounts)
    };




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
                    getCustomerAccounts={this.getCustomerAccounts}
                    getCustomerAddress={this.getCustomerAddress}
                    />
                </React.Fragment>
            </div>
        );
    }

}

