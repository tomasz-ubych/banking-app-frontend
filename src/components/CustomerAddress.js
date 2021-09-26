import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default class CustomerAddress extends Component {
    render() {
        if (this.props.addresses[0] !== null) {
            var addressTableData = this.props.addresses.map(function (address) {
                return <Table.Row key={address.id} >
                    <Table.Cell>{address.street}</Table.Cell>
                    <Table.Cell>{address.city}</Table.Cell>
                </Table.Row>
            });
            var addressTable =
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell>Street</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {addressTableData}
                    </Table.Body>
                </Table>
        }
        return addressTable;
    }
}