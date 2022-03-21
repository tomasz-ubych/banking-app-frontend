import React, { Component } from 'react';
import CustomerAccount from './CustomerAccount';
import EditableTransaction from '../Transaction/EditableTransaction';

export default class CustomerAccountList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditableFormOpen: false,
            clickedAccount: ""
        }
    }

    cancelNewEditableTransaction = () => {
        this.setState({
            isEditableFormOpen: false
        })
    };

    handleFormOpen = (isEditableFormOpen, clickedId) => {
        var clickedAccount = (this.props.accounts.filter(account => account.id == clickedId))[0];
        console.log(clickedAccount);
        this.setState({
            clickedAccount: clickedAccount,
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
                            clickedAccount={this.state.clickedAccount}
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

