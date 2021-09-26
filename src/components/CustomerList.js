import React, { Component } from 'react';
import { Header, Grid, Table } from 'semantic-ui-react'
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
                 <Table celled>
                     <Table.Header>
                     <Table.Row>
                             <Table.HeaderCell>Imię</Table.HeaderCell>
                             <Table.HeaderCell>Nazwisko</Table.HeaderCell>
                             <Table.HeaderCell>PESEL</Table.HeaderCell>
                             <Table.HeaderCell>Adresy</Table.HeaderCell>
                             <Table.HeaderCell>Rachunki</Table.HeaderCell>
                         </Table.Row>
                     </Table.Header>
                     <Table.Body>
                         {customerTableData}
                     </Table.Body>
                 </Table>
         }

        return (
            <div>   
                 {customerTableData !== null ? customerTable: <div>dupa</div>}
            </div>
        );
    }
}

