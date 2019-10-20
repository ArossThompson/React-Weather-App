import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    handleSearch = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render () {
        return(
            <div className="search-field">
                <form onSubmit={this.handleSearch}>
                    <input 
                        type="text" 
                        className="search-field__search"
                        value={this.state.term}
                        onChange={e => {this.setState({ term: e.target.value })}}
                        placeholder="Search a city name...."
                    ></input>
                    <div className="help">
                        <p className="helpTextHeading">Example searches:</p>
                        <p className="helpText">"Manchester GB" - Includes country code. **MOST ACCURATE**</p>
                        <p className="helpText">"Manchester" - No country code.</p>
                        <p className="helpText">Find country code abbreviations <a href="https://abbreviations.yourdictionary.com/articles/country-abbreviations.html" rel="noopener noreferrer" target="_blank">here</a>.</p>
                    </div>
                </form> 
            </div>
        )
    }
}

export default Search;