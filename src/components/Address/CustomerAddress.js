import React, { Component } from 'react';

export default class CustomerAddress extends Component {
    render() {
        return (
            <React.Fragment>
                <tr key={this.props.id} >
                    <td>{this.props.country}</td>
                    <td>{this.props.street}</td>
                    <td>{this.props.city}</td>
                    <td>{this.props.flatNumber}</td>
                    <td>{this.props.apartmentNumber}</td>
                    <td>{this.props.province}</td>
                </tr>
            </React.Fragment>
        );
    }
}
