import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    render () {
        return(
            <div className="search-field">
                <input type="text" className="search-field__search"></input>
                <i className="fa fa-search"></i>
            </div>
        )
    }
}

export default Search;