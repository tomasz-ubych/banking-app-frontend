import React, { Component } from 'react';
import { Header, Grid } from 'semantic-ui-react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default class CustomerAccounts extends Component {
    render() {
        if (this.props.accounts[0] !== null) {
            var accountsTableData = this.props.accounts.map(function (account) {
                return <Table.Row key={account.id} >
                    <Table.Cell>{account.iban}</Table.Cell>
                </Table.Row>
            });
            var accountsTable =
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>IBAN</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {accountsTableData}
                    </Table.Body>
                </Table>
        }

        return accountsTable;
    }
}