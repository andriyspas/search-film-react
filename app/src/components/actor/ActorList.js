import React, { Component } from 'react';
import Actor from './Actor';
import { Row } from  'react-bootstrap';

export class ActorList extends Component {
    render() {
        return (
            <Row>
                {
                    this.props.actors.map((item, index) => (
                        <Actor
                            actor={ item }
                            key={ index }
                        />
                    ))
                }
            </Row>
        );
    }
}