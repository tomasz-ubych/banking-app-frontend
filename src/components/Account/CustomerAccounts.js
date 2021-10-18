import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import EditableTransaction from '../Transaction/EditableTransaction.js';

export default class CustomerAccounts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditableFormOpen: false,
            clickedId: 0
        }
    }
    handleFormOpen = (event) => {
        this.setState({ isEditableFormOpen: true,
            clickedId: event.currentTarget.getAttribute('data-rowid')
        });
    }

    render() {
        const self = this;
        if (this.props.accounts[0] !== null) {
            var accountsTableData = this.props.accounts.map(function (account) {
                return <Table.Row key={account.id} >
                    <Table.Cell>{account.iban}</Table.Cell>
                    <Table.Cell>{account.currency}</Table.Cell>
                    <Table.Cell> <button className='ui basic button icon' onClick={self.handleFormOpen}  data-rowid={account.iban}>
                        <i className='plus icon' />
                    </button></Table.Cell>
                </Table.Row>
            });
            var accountsTable =
                <React.Fragment>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>IBAN</Table.HeaderCell>
                                <Table.HeaderCell>Waluta</Table.HeaderCell>
                                <Table.HeaderCell>Nowa transakcja</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {accountsTableData}
                        </Table.Body>
                    </Table>
                    {this.state.isEditableFormOpen ?
                    <EditableTransaction
                    accountIban={this.state.clickedId}
                    /> : null}
                </React.Fragment>
        }
        return accountsTable;
    }
}