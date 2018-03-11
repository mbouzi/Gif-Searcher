import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    background-color: #fff;
    box-sizing: border-box;
    -webkit-appearance: none;
    border-radius: 0;
    font-weight: 400;
    width: 70%;
    border: 1px solid;
    margin: 0;
    height: 52px;
    letter-spacing: 1px;
    font-size: 18px;
    outline: none
`

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
                <Input placeholder=""  onChange={() => this.onChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;
