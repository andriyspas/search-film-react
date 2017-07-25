import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'

class Search extends Component {
    render () {
        return (
            <FormControl
                className={ this.props.rangeClass === 'range' ? this.props.rangeClass : '' }
                type="text"
                value={ this.props.value }
                onChange={ this.props.onChange }
            />
        )
    }
}

export default Search;