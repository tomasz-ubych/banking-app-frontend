import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default class EditableTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipientIban: 0,
            currency: "PLN",
            amount: 0
        }
    }
    render() {
        return (
            <div className='ui card'>
            <div className='content'>
                <div className='header'>
                    <div className='field'>
                        <label>IBAN</label>
                        <input
                            type='text'
                            value={this.props.accountIban}
                        />
                    </div>
                    <div className='field'>
                        <label>Description</label>
                        <input
                            type='text'
                        />
                    </div>
                </div>
            </div>
            <div className='ui two bottom attached buttons'>
                <button
                    className='ui basic blue button'
                >
                    zatwierdz
                </button>
                <button
                    className='ui basic red button'
                >
                    Cancel
                </button>
            </div>
        </div >
        )
    }
}