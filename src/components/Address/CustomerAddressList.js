import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import CustomerAddress from './CustomerAddress';

export default class CustomerAddressList extends Component {
    render() {
        var addressTableData = (this.props.addresses[0] !== null ? this.props.addresses : [])
            .map((address) => {
                return <CustomerAddress
                    key={address.id}
                    id={address.id}
                    city={address.city}
                    street={address.street}
                    country={address.country}
                    flatNumber={address.apartmentNumber}
                    province = {address.province}
                />
            });
        if (this.props.addresses[0] !== null && this.props.addresses[0] !== undefined) {
            var addressTable =
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Country</Table.HeaderCell>
                            <Table.HeaderCell>Street</Table.HeaderCell>
                            <Table.HeaderCell>City</Table.HeaderCell>
                            <Table.HeaderCell>Flat number</Table.HeaderCell>
                            <Table.HeaderCell>Apartment number</Table.HeaderCell>
                            <Table.HeaderCell>Province</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {addressTableData}
                    </Table.Body>
                </Table>
        }

        return (
            <div>
                {addressTableData !== null ? addressTable : <div>dupa</div>}
            </div>
        );
    }
}

