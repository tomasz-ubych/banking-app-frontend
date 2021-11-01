import React, { Component } from 'react';
import Customer from './Customer';

export default class CustomerList extends Component {
    render() {
        var customerTableData = (this.props.customers[0] !== null ? this.props.customers : [])
            .map((customer) => {
                return <Customer
                    key={customer.id}
                    id={customer.id}
                    firstName={customer.firstName}
                    lastName={customer.lastName}
                    pesel={customer.pesel}
                />
            });
        if (this.props.customers[0] !== null && this.props.customers[0] !== undefined) {
            var customerTable =
                <table>
                    <tr>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                            <th>PESEL</th>
                            <th>Adresy</th>
                            <th>Rachunki</th>
                    </tr>
                    {customerTableData}
                </table>
        }

        return (
            <div>
                {customerTableData !== null ? customerTable : <div>dupa</div>}
            </div>
        );
    }
}

