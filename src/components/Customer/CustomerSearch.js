import React, { Component } from 'react';
import '../../scss/main.scss';

export default class CustomerSearch extends Component {
    constructor(props) {
        super(props)
        this.onInputchange = this.onInputchange.bind(this);
        this.state = {
            searchParameter: 'ID',
            searchId: '',
            searchFirstName: '',
            searchLastName: ''
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
            searchParameter: this.state.searchParameter.trim(),
            searchFirstName: this.state.searchFirstName.trim(),
            searchLastName: this.state.searchLastName.trim()
        });
    };

    render() {
        return (
            <div className="search">
                <div className="sub-header">Po czym chcesz wyszukać klienta?</div>
                <div className="search__radiobutton-section" onChange={this.onInputchange}>
                    <span className="search__radiobutton" ><input type="radio" name="searchParameter" value="ID" defaultChecked /> Id</span>
                    <span className="search__radiobutton" > <input type="radio" name="searchParameter" value="PESEL" /> Pesel</span>
                    <span className="search__radiobutton" > <input type="radio" name="searchParameter" value="NAME" /> Full name</span>
                </div>
                <div className="search__input">
                {this.state.searchParameter == 'ID' || this.state.searchParameter == 'PESEL'  ?
                    <div>
                        <input name="searchId"
                            type="text"
                            value={this.state.searchId}
                            onChange={this.onInputchange} />
                    </div>
                    :
                    <div>
                        <label for="searchFirstName">First name:</label>
                        <input name="searchFirstName"
                            type="text"
                            value={this.state.searchFirstName}
                            onChange={this.onInputchange} />
                        <label for="searchLastName">Last name:</label>
                        <input name="searchLastName"
                            type="text"
                            value={this.state.searchLastName}
                            onChange={this.onInputchange} />
                    </div>
                    }
                </div>
                <button className="search__button" onClick={this.handleSearch}> Pobierz dane klienta </button>
            </div>
        );
    }
}

