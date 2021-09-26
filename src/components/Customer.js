import React, { Component } from 'react';
import { Header, Grid } from 'semantic-ui-react'
import CustomerAddress from './CustomerAddress';


export default class Customer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addresses: [],
            accounts: []
        };
    }

    handleGetCustomerAddress = (event) => {
        const id = event.currentTarget.getAttribute("data-rowid");
        this.props.getCustomerAddress({
            clickedId: id
        });
    };

    handleGetCustomerAccounts = (event) => {
        const id = event.currentTarget.getAttribute("data-rowid");
        this.props.getCustomerAccounts({
            clickedId: id
        });
    };

    

    render() {
        return (
            <div className="App">
                <tr key={this.props.id} >
                    <td>{this.props.firstName}</td>
                    <td>{this.props.lastName}</td>
                    <td>{this.props.pesel}</td>
                    <td><button onClick={this.handleGetCustomerAddress} data-rowid={this.props.id}> Pobierz adres klienta </button></td>
                    <td><button onClick={this.handleGetCustomerAccounts} data-rowid={this.props.id}> Pobierz rachunki klienta </button></td>
                </tr>
                <CustomerAddress/>
            </div>
        );
    }
}

