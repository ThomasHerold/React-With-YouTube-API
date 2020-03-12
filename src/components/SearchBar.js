import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {

        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onTermSubmit(this.state.term); // passes term to parent component; arrow function passed as prop from App.js
    };

    render() {
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" onChange={this.onInputChange} value={this.state.term}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;