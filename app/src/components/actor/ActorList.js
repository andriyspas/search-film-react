import React, { Component } from 'react';
import Actor from './Actor';
import { Row } from  'react-bootstrap';

class ActorList extends Component {
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

export default ActorList;