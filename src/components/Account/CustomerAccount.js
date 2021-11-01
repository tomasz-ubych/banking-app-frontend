import React, { Component } from 'react';
import EditableTransaction from '../Transaction/EditableTransaction';

export default class CustomerAccount extends Component {
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

    handleFormOpen = (event) => {
        this.setState({ isEditableFormOpen: true,
            clickedId: event.currentTarget.getAttribute('data-rowid')
        });
    }
    render() {
        const self = this;
        return (
            <React.Fragment>
                <tr key={this.props.id} >
                    <td>{this.props.iban}</td>
                    <td>{this.props.currency}</td>
                    <td> <button className='ui basic button icon' onClick={self.handleFormOpen}  data-rowid={this.props.id }>
                        <i className='plus icon' />
                    </button>
                    </td>
                </tr>
                {this.state.isEditableFormOpen ?
                    <EditableTransaction
                    accountIban={this.state.clickedId}
                    cancelNewEditableTransaction = {this.cancelNewEditableTransaction}
                    /> : null}
            </React.Fragment>
        );
    }
}