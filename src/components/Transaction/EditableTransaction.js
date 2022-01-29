import React, { Component } from 'react';
import { isValidIBANNumber } from '../Utility/Validator';
import axios from 'axios';

export default class EditableTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ibanError: "",
            amountError: "",
            receiverIban: 0,
            currency: "PLN",
            transactionName: "",
            transactionAmount: 0
        }
        this.validationMessages = {
            iban: "Pass correct IBAN value!",
            amount: "Pass correct amount!"
        }   

    }

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.launchValidation(event);
    }

    launchValidation = (event) => {
        event.preventDefault();
        var eventValue = event.target.value;
        var eventId = event.target.id;
        let error = "";
        if (eventId === "ibanNumber") {
            if (isValidIBANNumber(eventValue) != "1") {
                error = this.validationMessages.iban
            }
            this.setState({
                ibanError: error
            })
        }
        else if (eventId === "transactionAmount") {
            var amountRegex = /^\-?[0-9]+(?:\.[0-9]{1,2})?$/
            if (!amountRegex.test(eventValue) || eventValue < 0) {
                error = this.validationMessages.amount
            }
            this.setState({
                amountError: error
            })
        }
    }

    confirmTransaction = () => {
        console.log("HERERE");
        var transaction = {
            amount: this.state.transactionAmount,
            date: Date.now(),
            transactionName: this.state.transactionName,
            initialAmount: 10,
            finalAmount: 20,
            isLocal: 0,
            transactionType: "SEPA",
            receiverAccount: {
                iban: this.state.receiverIban
            }
        }
        console.log("account iban: " + this.props.accountIban);
        axios.request({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/transaction`,
            params: {
                transaction: this.transaction,
                senderAccountIban: this.props.accountIban
            }
        })
    }

    render() {
        const { errors } = this.state;
        return (
            <div className='transaction'>
                <label>Transfer from account {this.props.clickedId} (18213 PLN)</label>
                <label>Recipient account number </label>
                <input
                    name='receiverIban'
                    id='ibanNumber'
                    type='text'
                    onChange={this.onInputChange}
                />
                {this.state.ibanError.length > 0 &&
                    <span className='error'>{this.state.ibanError}</span>}
                <label>Title </label>
                <input
                    name='transactionName'
                    type='text'
                    onChange={this.onInputChange}
                />
                <label>Amount</label>
                <input
                    name='transactionAmount'
                    id='transactionAmount'
                    type="number" min="0" max="10000.00" step="0.01"
                    onChange={this.onInputChange}
                />
                {this.state.amountError.length > 0 &&
                    <span className='error'>{this.state.amountError}</span>}
                <label>Type</label>
                <input
                    type='text'
                />
                <div className="transaction__buttons">
                    <button
                        onClick={this.props.cancelNewEditableTransaction}
                    >
                        Anuluj
                    </button>
                    <button
                        onClick={this.confirmTransaction}
                    >
                        Zatwierdź
                    </button>
                </div>
            </div >
        )
    }
}