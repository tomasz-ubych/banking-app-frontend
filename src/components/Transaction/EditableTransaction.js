import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import {isValidIBANNumber} from '../Utility/Validator';

export default class EditableTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ibanError: "",
            recipientIban: 0,
            currency: "PLN",
            amount: 0
        }
    }

    launchValidation = (event) => {
        event.preventDefault();
        let error = "";
        if (isValidIBANNumber(event.target.value) != "1"){
            error = "Pass correct IBAN value!"
        }
        this.setState({
            ibanError: error
        })
    }
    
    render() {
        const {errors} = this.state;
        return (
            <div className='ui card'>
            <div className='content'>
                <div className='header'>
                    <label>Transfer from account {this.props.accountIban} (18213 PLN)</label>
                    <div className='field'>
                        <label>Recipient account number </label>
                        <input
                            type='text'
                            onChange= {this.launchValidation}
                        />
                        {this.state.ibanError.length > 0 && 
                         <span className='error'>{this.state.ibanError}</span>}
                    </div>
                    <div className='field'>
                        <label>Title </label>
                        <input
                            type='text'
                        />
                    </div>
                    <div className='field'>
                        <label>Amount</label>
                        <input
                            type='text'
                        />
                    </div>
                    <div className='field'>
                        <label>Type</label>
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
                    Anuluj
                </button>
                <button
                    className='ui basic red button'
                >
                    Dalej
                </button>
            </div>
        </div >
        )
    }
}