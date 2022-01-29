import React, { Component } from 'react';
import CustomerAccount from './CustomerAccount';
import EditableTransaction from '../Transaction/EditableTransaction';

export default class CustomerAccountList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditableFormOpen: false,
            clickedId: 0
        }
    }

    cancelNewEditableTransaction = () => {
        this.setState({
            isEditableFormOpen: false
        })
    };

    handleFormOpen = (isEditableFormOpen, clickedId) => {
        this.setState({
            clickedId: clickedId,
            isEditableFormOpen: isEditableFormOpen
        })
    }
    render() {
        var accountTableData = (this.props.accounts[0] !== null ? this.props.accounts : [])
            .map((account) => {
                return <CustomerAccount
                    key={account.id}
                    id={account.id}
                    iban={account.iban}
                    currency={account.currency}
                    handleFormOpen={this.handleFormOpen}
                />
            });
        if (this.props.accounts[0] !== null && this.props.accounts[0] !== undefined) {
            var accountTable =
                <table className="fixed">
                    <tr>
                        <th>IBAN</th>
                        <th>Currency</th>
                        <th>Nowa transakcja</th>
                    </tr>
                    {accountTableData}
                    {this.state.isEditableFormOpen ?
                        <EditableTransaction
                            clickedId={this.state.clickedId}
                            cancelNewEditableTransaction={this.cancelNewEditableTransaction}
                        /> : null}
                </table>
        }
        return (
            <div>
                {accountTableData !== null ? accountTable : <div>dupa</div>}
            </div>
        );
    }
}

