import React, { Component } from 'react';
import { Table, TableCell, TableRow } from 'semantic-ui-react'
import CustomerAccounts from '../Account/CustomerAccounts';
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
        axios.get(`${process.env.REACT_APP_API_URL}/customer/${id}/address/`)
            .then(response => this.setState({
                addresses: response.data.content
            }))
        this.setState({
            areAddressesOpen: true
        })
    };

    handleGetCustomerAccounts = (event) => {
        const id = event.currentTarget.getAttribute("data-rowid");
        axios.get(`${process.env.REACT_APP_API_URL}/customer/${id}/accounts/`)
            .then(response => this.setState({
                accounts: response.data.content
            }))
        this.setState({
            areAccountsOpen: true
        })
    };

    render() {
        return (
            <React.Fragment>
                <Table.Body>
                    <Table.Row key={this.props.id} >
                        <Table.Cell>{this.props.firstName}</Table.Cell>
                        <Table.Cell>{this.props.lastName}</Table.Cell>
                        <Table.Cell>{this.props.pesel}</Table.Cell>
                        <Table.Cell><button onClick={this.handleGetCustomerAddress} data-rowid={this.props.id}> Pobierz adres klienta </button></Table.Cell>
                        <Table.Cell><button onClick={this.handleGetCustomerAccounts} data-rowid={this.props.id}> Pobierz rachunki klienta </button></Table.Cell>
                    </Table.Row>
                </Table.Body>
                <p>test</p>
                <div className="subtable">
                    {this.state.areAddressesOpen ?
                        <CustomerAddressList
                            addresses={this.state.addresses}
                        /> : null}
                    {this.state.areAccountsOpen ?
                        <CustomerAccounts
                            accounts={this.state.accounts}
                        /> :
                        null}
                </div>
            </React.Fragment>

        );
    }
}

