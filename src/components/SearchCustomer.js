import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import CustomerDetails from './CustomerDetails';

export default class Customers extends Component {
    constructor(props) {
        super(props)
        this.getCustomerAddress = this.getCustomerAddress.bind(this);
        this.getCustomer = this.getCustomer.bind(this);
        this.getCustomerAccounts = this.getCustomerAccounts.bind(this);
        this.onInputchange = this.onInputchange.bind(this);

        this.state = {
            customers: [],
            addresses: [],
            accounts: [],
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
        this.setState({
            clicked_id: id
        })
        axios.get(`${process.env.REACT_APP_API_URL}/customer/${id}/address/`)
            .then(response => this.setState({
                addresses: response.data.content
            }))
        console.log(this.state.addresses)
    };

    getCustomerAccounts(event) {
        const id = event.currentTarget.getAttribute("data-rowid");
        this.setState({
            clicked_id: id
        })
        axios.get(`${process.env.REACT_APP_API_URL}/customer/${id}/accounts/`)
            .then(response => this.setState({
                accounts: response.data.content
            }))
        console.log(this.state.accounts)
    };


    getCustomer() {
        this.setState({
            customers: [],
            accounts: [],
            addresses: []
        })
        if (this.state.searchParameter === "ID") {
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
            var customerTableData = this.state.customers.map(function (customer) {
                return <tr key={customer.id} >
                    <td>{customer.firstName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.pesel}</td>
                    <td><button onClick={self.getCustomerAddress} data-rowid={customer.id}> Pobierz adres klienta </button></td>
                    <td><button onClick={self.getCustomerAccounts} data-rowid={customer.id}> Pobierz rachunki klienta </button></td>
                </tr>
            });
        }
        if (this.state.addresses[0] !== null) {
            var addressTableData = this.state.addresses.map(function (address) {
                return <tr key={address.id} >
                    <td>{address.street}</td>
                    <td>{address.city}</td>
                </tr>
            });
        }
        if (this.state.accounts[0] !== null) {
            var accountsTableData = this.state.accounts.map(function (account) {
                return <tr key={account.id} >
                    <td>{account.iban}</td>
                </tr>
            });
        }

        let customerTable = <table><thead></thead></table>;
        if (this.state.customers[0] !== null && this.state.customers[0] !== undefined) {
            customerTable =
                <table >
                    <thead>
                        <tr>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                            <th>PESEL</th>
                            <th>Adresy</th>
                            <th>Rachunki</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerTableData}
                    </tbody>
                </table>
        }

        let addressTable = <table><thead></thead></table>;
        if (this.state.addresses[0] !== null && this.state.addresses[0] !== undefined) {
            addressTable =
                <table>
                    <thead>
                        <div>Adres klienta o
                            {this.state.searchParameter == 'ID' ? ' ID' : ' PESEL-u'}
                            : {this.state.clicked_id}</div>
                        <tr>
                            <th>Street</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addressTableData}
                    </tbody>
                </table>
        }

        let accountsTable = <table><thead></thead></table>;
        if (this.state.accounts[0] !== null && this.state.accounts[0] !== undefined) {
            accountsTable =
                <table>
                    <thead>
                        <div>Rachunki klienta o
                            {this.state.searchParameter == 'ID' ? ' ID' : ' PESEL-u'}
                            : {this.state.clicked_id}</div>
                        <tr>
                            <th>IBAN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accountsTableData}
                    </tbody>
                </table>
        }


        return <div className="App">
            <div>
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
            {customerTable}
            {addressTable}
            {accountsTable}
        </div>;
    }
}

