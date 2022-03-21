import React, { Component } from 'react';
import EditableTransaction from '../Transaction/EditableTransaction';

export default class CustomerAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditableFormOpen:'',
            clickedId: 0
        }
    }
    
    handleFormOpen = (event) => {
        this.props.handleFormOpen(true, event.currentTarget.getAttribute('data-rowid'));
    }
    render() {
        const self = this;
        return (
            <React.Fragment>
                <tr key={this.props.id} >
                    <td>{this.props.iban}</td>
                    <td>{this.props.currency}</td>
                    <td> <button onClick={self.handleFormOpen}  data-rowid={this.props.id}> Dodaj
                    </button>
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}