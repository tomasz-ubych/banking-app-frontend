import React, { Component } from 'react';
import { Header, Grid } from 'semantic-ui-react'
import Customer from './Customer';


export default class CustomerList extends Component {

    handleGetCustomerAccounts = (clickedId) => {
        this.props.getCustomerAccounts(clickedId);
    }



    render() {
        var customersList = (this.props.customers[0] !== null ? this.props.customers : [])
        .map((customer) => {
            return <Customer
                key={customer.id}
                id={customer.id}
                firstName={customer.firstName}
                lastName={customer.lastName}
                pesel={customer.pesel}
                getCustomerAccounts={this.handleGetCustomerAccounts}
                getCustomerAddress={this.getCustomerAddress}
            />
        });
        return (
            <div>   
                 {customersList !== null ? customersList: <div>dupa</div>}
            </div>
        );
    }
}

