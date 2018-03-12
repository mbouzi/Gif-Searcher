import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    background-color: #fff;
    box-sizing: border-box;
    -webkit-appearance: none;
    border-radius: 0;
    font-weight: 400;
    width: 70%;
    margin: 0;
    height: 52px;
    letter-spacing: 1px;
    font-size: 18px;
    outline: none;
    border: none;
`

class SearchBar extends React.Component {
   
    onChange = (input) => {
        this.props.onTermChange(input);
    }

    onKeyUp = (input) => {
        if(input && input.length > 2) {
            setTimeout(() => this.props.handleKeyUp(input), 2000);
        }
    }

    renderPreviousTerms = () => {
        const terms = this.props.terms.terms;
        console.log("SEACH TERMS:", terms)
        if(terms && terms.length > 0) {
            return terms.map((term, index) => {
                console.log("term:", term, index)
                return (
                    <li key={index}>{term}</li>
                )
            })
        }
    }

    render() {
        return (
            <div className="search">
                <Input placeholder="Search for gifs" onKeyUp={() => this.onKeyUp(event.target.value)}  onChange={() => this.onChange(event.target.value)} />
                <div>
                    <ul>
                        {this.renderPreviousTerms()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SearchBar;
