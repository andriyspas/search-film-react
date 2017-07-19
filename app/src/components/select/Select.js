import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'

export class Select extends Component {
    render() {
        return (
            <FormControl
                componentClass="select"
                onChange={this.props.onChange}
            >
                { this.props.options }
            </FormControl>
        )
    }
}
