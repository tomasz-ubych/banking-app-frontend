import React, { Component } from 'react';
import {Table } from 'semantic-ui-react'

export default class CustomerAddress extends Component {
    render() {
        return (
            <React.Fragment>
                <Table.Row key={this.props.id} >
                    <Table.Cell>{this.props.country}</Table.Cell>
                    <Table.Cell>{this.props.street}</Table.Cell>
                    <Table.Cell>{this.props.city}</Table.Cell>
                    <Table.Cell>{this.props.flatNumber}</Table.Cell>
                    <Table.Cell>{this.props.apartmentNumber}</Table.Cell>
                    <Table.Cell>{this.props.province}</Table.Cell>
                </Table.Row>
            </React.Fragment>
        );
    }
}
