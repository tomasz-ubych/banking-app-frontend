import React, { Component } from 'react';
import CustomerAccount from './CustomerAccount';

export default class CustomerAccountList extends Component {
    render() {
        var accountTableData = (this.props.accounts[0] !== null ? this.props.accounts : [])
            .map((account) => {
                return <CustomerAccount
                    key={account.id}
                    id={account.id}
                    iban={account.iban}
                    currency={account.currency}
                />
            });
        if (this.props.accounts[0] !== null && this.props.accounts[0] !== undefined) {
            var accountTable =
                <table className='sub-table'>
                        <tr>
                            <td>IBAN</td>
                            <td>Currency</td>
                            <td>Nowa transakcja</td>
                        </tr>
                        {accountTableData}
                </table>
        }
        return (
            <div>
                {accountTableData !== null ? accountTable : <div>dupa</div>}
            </div>
        );
    }
}

