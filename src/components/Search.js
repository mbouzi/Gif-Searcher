import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    background-color: #fff;
    box-sizing: border-box;
    -webkit-appearance: none;
    border-radius: 0;
    font-weight: 400;
    margin: 0 auto;
    height: 52px;
    letter-spacing: 1px;
    font-size: 18px;
    outline: none;
    border: none;
    width: 100%;
    margin: 0 auto;
`,
    Results = styled.div `
        background-color: #ffffffa1;
    `,
    List = styled.ul`
        list-style-type: none;
        padding: 0;
        margin: 0;
    `,
    Term = styled.li`
        text-align: left;
        padding: 10px;
        &hover: {
            background-color: #fff;
        }
    ;`

class Search extends React.Component {

    constructor(props){
        super(props);
        this.timeout =  0;
      }
    
    onChange = (input) => {
        this.props.onTermChange(input);
    }

    onKeyUp = (input) => {
        if(this.timeout){ clearTimeout(this.timeout)}
        if(input && input.length > 2) {
            this.timeout = setTimeout(() => this.props.handleKeyUp(input), 1000);
        }
    }


    renderPreviousTerms = () => {
        const terms = this.props.terms.terms;
        if(terms && terms.length > 0) {
            return terms.map((term, index) => {
                return (
                    <Term onClick={() => this.onChange(term)} key={index}>{term}</Term>
                )
            })
        }
    }

    render() {
        return (
            <div >
                <Input value={this.props.term} placeholder="Search for gifs" onKeyUp={() => this.onKeyUp(event.target.value)}  onChange={() => this.onChange(event.target.value)} />
                <Results>
                    <List>
                        {this.renderPreviousTerms()}
                    </List>
                </Results>
            </div>
        );
    }
}

export default Search;
