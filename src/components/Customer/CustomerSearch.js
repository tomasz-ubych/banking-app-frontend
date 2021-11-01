import React, { Component } from 'react';
import '../../scss/main.scss';

export default class CustomerSearch extends Component {
    constructor(props) {
        super(props)
        this.onInputchange = this.onInputchange.bind(this);
        this.state = {
            searchId: '',
            searchParameter: 'ID'
        };
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSearch = () => {
        this.props.getCustomer({
            searchId: this.state.searchId,
            searchParameter: this.state.searchParameter
        });
    };

    render() {
        return (
            <div className="search">
                    <div className="search__radiobuttons" onChange={this.onInputchange}>
                        <span className="answerBottomYesNo" ><input type="radio" name="searchParameter" value="ID" defaultChecked /> Id</span>
                        <span className="answerBottomYesNo" > <input type="radio" name="searchParameter" value="PESEL" /> Pesel</span>
                    </div>
                    <div className="search__input">
                        <input name="searchId"
                            type="text"
                            value={this.state.searchId}
                            onChange={this.onInputchange} />
                    </div>
                    <button className="search__button" onClick={this.handleSearch}> Pobierz dane klienta </button>
            </div>
        );
    }
}

