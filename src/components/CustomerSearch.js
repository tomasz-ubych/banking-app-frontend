import React, { Component } from 'react';

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
        console.log(this.state.searchParameter + ' dupa ' + this.state.searchId + ' - dupa2')
        this.props.getCustomer({
            searchId: this.state.searchId,
            searchParameter: this.state.searchParameter
        });
    };

    render() {
        return (
            <div className="App">
                    <div onChange={this.onInputchange}>
                        <span class="answerBottomYesNo" ><input type="radio" name="searchParameter" value="ID" defaultChecked /> Id</span>
                        <span class="answerBottomYesNo" > <input type="radio" name="searchParameter" value="PESEL" /> Pesel</span>
                    </div>
                    <div>
                        <input name="searchId"
                            type="text"
                            value={this.state.searchId}
                            onChange={this.onInputchange} />
                    </div>
                    <button onClick={this.handleSearch}> Pobierz dane klienta </button>
            </div>
        );
    }
}

