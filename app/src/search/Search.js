import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap'

export class Search extends Component {
    render() {
        return (
            <FormControl
                type="text"
                value={ this.props.value }
                onChange={ this.props.onChange }
            />
        );
    }
}
