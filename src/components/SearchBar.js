import React from 'react';

class SearchBar extends React.Component {

    constructor() {
        super();
        this.state = { input: '' }
    }

    onChange = (input) => {
        this.setState({input});
        this.props.onTermChange(input);
    }

    render() {
        return (
            <div className="search">
                <input onChange={this.onChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;
