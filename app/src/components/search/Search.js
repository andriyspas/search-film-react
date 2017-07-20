import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'

class Search extends Component {
    constructor() {
        super();

        this.state = {
            className: ''
        }
    }

    addClass = () => {
        this.setState({className: "open"});
    };
    
    render () {
        return (
            <FormControl
                className={ this.state.className }
                onClick={ this.addClass }
                type="text"
                value={ this.props.value }
                onChange={ this.props.onChange }
            />
        )
    }
}

export default Search;