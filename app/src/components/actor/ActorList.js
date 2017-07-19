import React, { Component } from 'react';
import Actor from './Actor';

export class ActorList extends Component {

    render() {
        return (
            <div>
                {
                    this.props.actors.map((item, index) => (
                        <Actor
                            actor={ item }
                            key={ index }
                        />
                    ))
                }
            </div>
        );
    }
}