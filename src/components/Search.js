import React, { PropTypes, Component } from 'react';
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
        ${List}:hover & {
            background: #fff;
        }
        cursor: pointer;
    ;`

class Search extends Component {

    constructor(props){
        super(props);
        this.timeout =  0;
    }

    static propTypes = {
        terms: PropTypes.object,
        handleKeyUp: PropTypes.func
    }

    static defaultProps =  {
        handleKeyUp: () => console.log("handleKeyUp")
    }
    
    onChange = (input) => {
        this.props.onTermChange(input);
    }

    onKeyUp = (input) => {
        if(this.timeout){ clearTimeout(this.timeout)} 
        if(input && input.length > 2) { // store input term 1 second after done typing
            this.timeout = setTimeout(() => this.props.handleKeyUp(input), 1000);
        }
    }


    renderPreviousTerms = () => {
        const terms = this.props.terms.terms; // previous input terms

        if(terms && terms.length > 0) {
            return terms.map((term, index) => {
                return (
                    <Term onClick={() => this.onChange(term)} key={index}>{term}</Term>
                )
            })
        }
    }

    renderTermList = () => {
        if(this.props.term) {
            return (
                <List>
                    {this.renderPreviousTerms()}
                </List>
            )
        }
    }

    render() {
        return (
            <div >
                <Input value={this.props.term} placeholder="Search for gifs" onKeyUp={() => this.onKeyUp(event.target.value)}  onChange={() => this.onChange(event.target.value)} />
                <Results>
                {this.renderTermList()}
                </Results>
            </div>
        );
    }
}

export default Search;
