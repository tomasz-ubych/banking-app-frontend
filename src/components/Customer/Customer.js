import React, { Component } from 'react';
import CustomerAccountList from '../Account/CustomerAccountList.js';
import CustomerAddressList from '../Address/CustomerAddressList';
import axios from 'axios';
import '../../App.css'

export default class Customer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addresses: [],
            accounts: [],
            areAddressesOpen: false,
            areAccountsOpen: false
        };
    }

    handleGetCustomerAddress = (event) => {
        const id = event.currentTarget.getAttribute("data-rowid");
        axios.get(`${process.env.REACT_APP_API_URL}/address?customerId=${id}`)
            .then(response => this.setState({
                addresses: response.data.content
            }))
        this.setState({
            areAddressesOpen: true
        })
        this.props.clearNotChosenCustomers(id);
    };

    handleGetCustomerAccounts = (event) => {
        const id = event.currentTarget.getAttribute("data-rowid");
        axios.get(`${process.env.REACT_APP_API_URL}/account?customerId=${id}`)
            .then(response => this.setState({
                accounts: response.data.content
            }))
        this.setState({
            areAccountsOpen: true
        })
        this.props.clearNotChosenCustomers(id);
    };

    render() {
        return (
            <React.Fragment>
                    <tr key={this.props.id} >
                        <td>{this.props.firstName}</td>
                        <td>{this.props.lastName}</td>
                        <td>{this.props.pesel}</td>
                        <td><button onClick={this.handleGetCustomerAddress} data-rowid={this.props.id}> Pobierz adres klienta </button></td>
                        <td><button onClick={this.handleGetCustomerAccounts} data-rowid={this.props.id}> Pobierz rachunki klienta </button></td>
                    </tr>
                    {this.state.areAddressesOpen ?
                        <CustomerAddressList
                            addresses={this.state.addresses}
                        /> : null}
                    {this.state.areAccountsOpen ?
                        <CustomerAccountList
                            accounts={this.state.accounts}
                        /> :
                        null}
            </React.Fragment>

        );
    }
}

