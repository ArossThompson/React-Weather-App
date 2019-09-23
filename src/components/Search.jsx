import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    render () {
        return(
            <div class="search-field">
                <input type="text" className="search-field__search"></input>
            </div>
        )
    }
}

export default Search;