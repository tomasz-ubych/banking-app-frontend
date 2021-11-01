import React, { Component } from 'react';
import CustomerAddress from './CustomerAddress';

export default class CustomerAddressList extends Component {
    render() {
        var addressTableData = (this.props.addresses[0] !== null ? this.props.addresses : [])
            .map((address) => {
                return <CustomerAddress
                    key={address.id}
                    id={address.id}
                    city={address.city}
                    street={address.street}
                    country={address.country}
                    flatNumber={address.apartmentNumber}
                    province = {address.province}
                />
            });
        if (this.props.addresses[0] !== null && this.props.addresses[0] !== undefined) {
            var addressTable =
                <table className="sub-table">
                        <tr>
                            <th>Country</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>Flat number</th>
                            <th>Apartment number</th>
                            <th>Province</th>
                        </tr>
                        {addressTableData}
                </table>
        }

        return (
            <div>
                {addressTableData !== null ? addressTable : <div>dupa</div>}
            </div>
        );
    }
}

