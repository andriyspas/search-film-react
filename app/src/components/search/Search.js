import React, { Component } from 'react'
import { FormControl, Grid, Row, Col } from 'react-bootstrap'

export class Search extends Component {
    constructor() {
        super();

        this.state = {
            className: ''
        }
    }

    addClass = () => {
        this.setState({className: "open"});
    };

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col>
                        <h2>Lorem ipsum</h2>
                        <h2>is simply dummy text of the printing and typesetting industry</h2>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <FormControl
                            className={ this.state.className }
                            onClick={ this.addClass }
                            type="text"
                            value={ this.props.value }
                            onChange={ this.props.onChange }
                        />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
